import { Injectable } from "@angular/core";
import { Sponsor } from "../about/sponsor";
import * as fs from "tns-core-modules/file-system";

const APP_ST_VERSION = "version";

@Injectable()
export class SettingsService {
    private _appDescription: string;
    private _appName: string;

    getSettings<S>(moduleName?: string, param?: string): S {
        let settings;
        if (moduleName)
            settings = this.config[moduleName];
        else
            settings = this.config;

        if (!settings)
            throw new Error('Settings para o módulo ' + moduleName + ' não foi definido!');

        if (!param) {
            if (this.debug)
                console.log('SettingsService.getSettings: Obtendo parâmetro: ' + param + ' para o módulo ' + moduleName);
            return settings;
        } else if (settings[param]) {
            if (this.debug)
                console.log('SettingsService.getSettings: Obtendo parâmetro: ' + param + ' para o módulo ' + moduleName + ' em parâmetros específicos');
            return settings[param];
        } else if (this.config[param]) {
            if (this.debug)
                console.log('SettingsService.getSettings: Obtendo parâmetro: ' + param + ' na configuração geral para o módulo ' + moduleName);
            return this.config[param];
        } else
            throw new Error('Parâmetro ' + param + ' não encontrado para o módulo ' + moduleName);
    }

    // Versão interna da classe, deve ser a mesma do arquivo de configuração;
    private readonly _version: number;
    private _debug: boolean;

    /**
     * Retorna uma string com a descrição da aplicação.
     * 
     */
    public get appName(): string{
        return this._appName;
    }
    public get appDescription(): string{
        return this._appDescription;
    }

    private config: any;
    private teamJson: any;
    /*
     * { "data": string , "version": number},
     */
    private webServiceVersions: any[];
    private _dataPath: string;

    /**
     * Carrega as configurações e dados
     * @version: 201907180000
     */
    constructor() {
        this._version = 201907222045;
        this.loadSettings();
        console.log("Debug está? ", this.debug ? "Ativado" : "Desativado");
    }

    /*
     *
     */
    getFile(file: string) {
        if (!this.config)
            throw new Error("Config não foi carregado, execute primeiro loadSettings()");
        let currentAppFolder = fs.knownFolders.currentApp();
        let path = fs.path.join(currentAppFolder.path, this._dataPath, file);
        let datafile = fs.File.fromPath(path);

        let data = datafile.readTextSync((error) => {
            if (this.config.debug) {
                console.log("Settings, read text:", error);
            }
        });
        if (this.config.debug) {
            console.log("Settings.getFile current app folder: ", currentAppFolder);
            console.log("Settings.getFile path: ", path);
            console.log("Settings.getFile data", data);
        }
        return JSON.parse(data);
    }

    get prayTimesMethod(): string {
        return this.config.prayTimes.method;
    }

    /** 
     * Verifica a versão, se não for informado módulo, usa geral.
     * 
     * Caso a versão não seja verificável ou não seja compatível lança Error
     * 
     */
    public checkVersion(module: String = "geral", moduleVersion?: number) {
        /* filtra no array de versions e retorna apenas a própriedade versão */
        let dataVersion = this.webServiceVersions.filter(name => name.data == module)[0].version;
        if (module == "geral"
            && (this.config.version != this.version)
            && (this.config.version != dataVersion))
            throw new Error("Versão das configurações incompatíveis no modulo geral(package, config,  webservice)! " + "("
                + this.version + ", "
                + this.config.version + ", "
                + dataVersion + ")");
        else if (this.version < dataVersion)
            throw new Error("Versão das aplicação incompatíveis para o módulo " + module + " (package, config, webservice)! " + "("
                + this.version + ", "
                + this.config.version + ", "
                + dataVersion + ")");
        else if (dataVersion < moduleVersion)
            throw new Error("Versão das configurações incompatíveis para o módulo " + module + " (package, config, webservice)! " + "("
                + this.version + ", "
                + this.config.version + ", "
                + dataVersion + ")");
    }

    /**
     * Retorna a versão do módulo ou dado informado
     * 
     * Os dados devem prefixados com "data-", por exemplo
     * O Módulo Glossário é "glossary" 
     * os dados do módulo glossary deve ser "data-glossary" 
     * 
     * Se não houver versão cadastrada lança Error;
     */
    public getVersion(mdlName: string = "geral"): number {
        let module = this.webServiceVersions.filter(module => module.name == mdlName)[0];
        if (!module) throw new Error("Módulo não implementado" + module);
        if (this.debug)
            console.log("Versão para o módulo ", mdlName, ": ", module.version);
        return module.version;
    }
    /**
     * Retorna a versão geral do sistema.
     * 
     * A Versão geral do sistema deve ser a mesma:
     * no arquivo package.json, config.json e no webservice de configurações.
     */
    get version(): number {
        return this._version;
    }

    public get debug(): boolean {
        return this._debug;
    }

    /**
     * Retorna um array de patrocinadores do projeto.
     * 
     * Os patrocinadores são aqueles que de alguma forma sustentam custos financeiros, logísticos e equipamentos para realização do projeto.
     * 
     */
    public get sponsors(): Sponsor[] {
        let sponsor = this.getFile("sponsors.json");
        if (this.debug) console.log("sponsor: ", sponsor);
        return sponsor;
    }

    /**
     * Retorna uma string com dados dos autores e mantenedores.
     * 
     * @todo transformar num array de Mu’min (مؤمن) ou Ulama (علماء), obter automáticamente do repositório para tonar justo qualquer participação.
     */
    get team(): string {
        if (!this.teamJson) this.teamJson = this.getFile("team.json");
        return JSON.stringify(this.teamJson);
    }

    get rssToJsonConverterType(): string {
        return this.config.rssToJsonConverterType;
    }

    get rssToJsonConverterBaseUrl(): string {
        return this.config.rssToJsonConverterBaseUrl;
    }

    /**
     * Retorna um Array dos feeds que estão ativos
     * formato do objeto no arquivo config.json:
     * {ative:boolean, url:string, type:enum(rss,atom,json)}
     * Lembrando que nesta versão se rss ou atom, usa o site rss2json para conversão
     *
     * @return urls em formato string dos feeds ativos.
     *
     * @TODO migrar esta informação para o arquivo sites.json
     */
    get feedUrls(): string[] {
        let feedUrls = this.config.urls
            .filter(item => item.active
                && (item.type == "rss"
                    || item.type == "atom"
                    || item.type == "feed-json"));

        if (this.debug) {
            console.log("Feeds URLs disponíveis: ", this.config.feedUrls)
            console.log("Feeds Ativos: ", feedUrls);
        };
        return feedUrls.map(item => item.url);
    }
    get allUrls(): string[] {
        if (this.debug) {
            console.log("All URLs disponíveis: ", this.config.feedUrls)
        };
        return this.config.feedUrls.map(item => item.url);
    }
    /*
     * Carregando as configurações básicas.
     */
    public loadSettings(force?: boolean) {
        // não use a função getFile() até processar o config.
        this.config = require("~/config.json");
        console.log("Recarregando configurações: ", this.config.version);

        this._debug = this.config.debug;
        this._dataPath = "data";

        // require("../../data/glossary.json");

        if (this.debug) console.log(this.config);

        // a partir daqui já pode usar getFile()
        let pkg = this.getFile("../package.json");
        this._appName = pkg.displayName;
        this._appDescription = pkg.description;
        this.webServiceVersions = this.getFile("versions.json");
        if (this.debug) {
            console.log("Versões do WebService: ", this.webServiceVersions);
            console.log("Versão Package: ", this.version);
            console.log("Versão Aquivo Config: ", this.config.version);
        }

        // compara as versões da configuração, interna da classe e do webservice
        this.checkVersion();
        this.loadSponsors();
    }

    private loadSponsors() {
        this.sponsors;
        // @todo não precisa carregar veja a propriedade sponsors
    }

}