# Ilsamic App

Este aplicativo está sendo desenvolvido com diversos propóstios, primeiro me ajudar com minhas orações e estudos no Islamismo, e em segundo desenvolver cada vez mais minhas habilidades ciêntificas, dentre elas a Exegese Islamica do Alcorão, O Estudo da Astronomia em especial o movimento do sol, da terra e da lua para calculos da oração e também para uso com PicoSats e NanoSats, O Estudo da programação para Celular e todos os conceitos relacionados.

Este aplicativo também pode ajudar outros islamicos pois estou adicionando a ele recursos que ajudam cada um identificar mussalas, serviços e lojas islâmicas, além de outros muçulmanos que estejam nas proxímidades. Este recurso faz parte integral dos meus estudos relativos a desenvolvimento e geolocalização.

Por questões de segurança, sabendo que há regiões que não toleram as diferenças religiosas e muito menos o islâmismo a localização de muçulmanos só é feita com estrita autorização do usuário, e sempre que o mesmo fecha a aplicação é preciso autorizar novamente a publicação de sua localização atráves de novo login na aplicação, portanto ela não grava seu login, sempre que sai, é preciso logar de novo, efetuando todo o processo de autenticação. A autenticação será limitada inicialmente ao Google integrado com seu número telefonico via SMS.

Os anunciantes, são fixos portanto somente são removidos da aplicação através de solicitação por escrito, já que normalmente tais anunciantes são patrocinadores e sua divulgação é uma retribuição ao apoio ao desenvolvimento.

As Mussalas, Mesquistas e centros de apoio são divulgados automáticamente conforme identificadas na internet, ou através de solicitação para que sejam adicionadas, caso desejem que sejam removidas, basta enviar uma solicitação por escrito do representante oficial do centro.

[O APK para testes do Calendário de Orações está liberado neste link.](https://github.com/islamic-works/islamic-app/releases/tag/v0.0.1-alpha-2)

## Como Contribuir como Desenvolvedor

O Fonte somente será liberado após a aplicação se tornar eficazmente segura e todo o código estiver limpo e bem estruturado, espero que seja na versão 0.1.0-beta quando todas as funcionalidades básicas estiverem implementadas

 Para se tornar membro e colaborador do projeto é precisso que estude as funcionalidades e passe ativamente a trazer soluções e contribuições efetivas ao código e conteúdo, como por exemplo:
 
 - Contribuir com o conteúdo e melhoria dos módulo Glossário ou Data (onde são armazenados dados iniciais da aplicação)
 - Contribuir com o design da aplicação
 - Contribuir com melhorias no código
 - Trazer novos recursos
 - Ajudar nos contratos de uso e manuais
 
Conforme os colaboradores forem se tornando presentes e ativos com suas contribuições, estes serão adicionados ao Time através do aplicativo KeyBase, e podem usar a URL: https://keybase.io/team/islamicworks.app, e para quem ainda não é membro e deseja conversar e aprender sobre a proposta pode participar do forum público em https://keybase.io/team/islamicworks.public.

Abaixo listo algumas funcionalidades que já tem seu código liberado e podem ser estudas.

- [Mussala](https://github.com/islamic-works/mussala-module) - era "Localizador", este módulo foi iniciado neste release, assim que o primeiro código com eficacia em localizar as mesquitas próximas conforme nosso banco de dados estiver funcionando, então, será liberado.
- [Auth - em desenvolvimento](https://github.com/islamic-works/auth-module), este módulo cuidará de questões relativa a identificação do usuário (autenticação) e em casos muito específicos a autorização, como certificação de mussalas, mesquitas e centros de apoio. Um usuário comum não pode certificar outros usuários, apenas os que forem validados através de documentos oficiais como sendo responsáveis por alguma organização Islâmica. Veja mais detalhes em [Readme](https://github.com/islamic-works/auth-module/Readme) e [Projeto de Autenticação, Autorização e Certificação](https://github.com/islamic-works/islamic-app/projects/1),
- [Persistence](https://github.com/islamic-works/persistence-module) - Camada de abstração de persistência
- [Entities](https://github.com/islamic-works/entities) - Entidades usadas no projeto
- [Rádio - liberado com recursos básicos](https://github.com/islamic-works/radio-module)
- [Calendário - em processo de finalização](https://github.com/islamic-works/praytimes-module)
- [Data](https://github.com/islamic-works/data) este módulo armazena os dados offline iniciais da aplicação, existe um branch chamado Off-Line que armazena os dados que serão carregados junto com o pacote de distribuição da aplicação para serem usados nos momentos iniciais da instalação, posteriormente o próprio usuário poderá adcionar novos dados que desejar tornar público que serão aos poucos incorporados a este módulo de forma definitiva, o branch master será usado para armazenar os dados que serão publicados no webservice e no databse.
- [Glossário - Versão beta liberada](https://github.com/islamic-works/glossary-module) - Será ampliado para um módulo de E-Lerning com o alcorão, o alfabeto, pronúncias e recitações.
- [Rss Feed Read - Versão beta liberada](https://github.com/islamic-works/rss-reader-module)
c-works/glossary-module)

# Apoio

Para apoiar meus estudos, já que todo o código aberto pode contribuir também com seu aprendizado e se aplicado adequadamente pode gerar renda em projetos comerciais, deixo abaixo opções de apoio:

<a href="https://www.patreon.com/bePatron?u=12060988" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>


https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CWUDP66Q95W44&source=url

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="CWUDP66Q95W44" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
  <img alt="QR Code" border="1" src="./docs/PayPal-QR Code.png"/>
</form>

