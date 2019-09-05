# RoadMap

O Roadmap abaixo tem como objetivo apresentar uma proposta de prioridades no desenvolvimento, porém pode ser alterado conforme demandas que surjam em cada versão liberada, além claro de solicitações que venham a ser identificadas pelos usuários.

Use o recurso de issues no link http://github.com/islamic-works/islamic-app/issues para apresentar sugestões e bugs que venha a encontrar, e caso deseje colaborar apresente seu projeto de colaboração com sua prova de conceito do que pretende implementar no projeto, basta fazer um fork do módulo, fazer os ajustes ou implementação de novos recursos e finalmente um PR para que possamos analisar a proposta.

O aplicativo usará a numeração básica de versionamento, inicialmente as versões 0.0 serão beta por natureza e serão provas de conceito, a partir da versão 0.1 serão as verões já funcionais e estarei trabalhando na implementação do passaporte, em paralelo caso surja um voluntário a versão 0.2 será trabalhada com um visual mais elaborado, caso não tenha um voluntário trabalharei em seguida quando puder.

## 0.0-beta Prova de conceito

### 0.0.3-beta-8 - (10) - Ativação do Rastreamento

Nesta versão foi trabalhado o rastreamento inicial da aplicação, ela já é capaz de rastrear o usuário e registrar no banco de dados.

### 0.0.4-beta-1 - (11) - Ativação do Google Map Clustering

Nesta versão irei trabalhar na obtenção da localização dos demais usuários, assim fazendo o zoom no mapa de forma a apresentar um grupo ideal de usuários nas proximidades conforme parâmetros de localização, por exemplo:

> Em um raio de 1km quais são os outros usuários do sistema, caso não haja, qual seria o próximo passo para reduzir o zoom do mapa e apresentar pelo menos mais um usuário, até um certo limite, digamos 30km que seria o raio aproximado do centro de uma cidade a outra como fortaleza até Aquiraz.

Nesta versão tentarei usar o nativescript-google-maps-utils, porém em tentativas anteriores ele travou a aplicação totalmente, verei até onde é um problema do plugin, do celular ou outro recurso.

## 0.0.6-beta-1 - Revisão do Multidex

Revisar as configurações do *multidex* em busca de otimizações.

## 0.1.0-beta

Ativação dos recursos de passaporte do aplicativo onde usuários validados por nossa equipe irão validar outros usuários através de certificados mutuamente assinados.

Para se dar validade aos certificados, será necessário que os primeiros usuários solicitem aos desenvolvedores a validação de seu cadastrado, assinando assim seus certificados com o certificado a própria aplicação, a partir dai estes primeiros usuários poderão assinar outros usuários atestando sua autenticidade a participação em seus centros de apoio e mussalas/mesquitas, a partir dai usuários que obtiverem os certificados de imam através de documentação comprobatória poderão atestar por sí próprios a autenticidade de outros usuários.

## 0.2.0 - User eXperience

Na versão 0.1 pretendo rever todo o layout do aplicativo melhorando dentro do possível e minhas habilidades o design das telas. Caso surja um voluntário que possa trabalhar no layout será a hora para tal trabalho.

O principal será a mudança do layout dos botões, ajustando de forma que se obtenha mais espaço na tela com a ocultação deles caso não sejam necessários.

Os botões de login e logoff deverão ser trabalhados para que sejam apresentados conforme a autenticação do usuário, e também o botão de localização de outros usuários e centros de apoio.

