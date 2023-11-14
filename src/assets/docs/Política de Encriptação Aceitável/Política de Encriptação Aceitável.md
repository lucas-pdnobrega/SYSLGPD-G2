**Grupo de Consenso em Políticas e Recursos**
![](Aspose.Words.9867d0f2-54e0-44c5-81fc-52e358e59a49.001.png)![](Aspose.Words.9867d0f2-54e0-44c5-81fc-52e358e59a49.002.png)![](Aspose.Words.9867d0f2-54e0-44c5-81fc-52e358e59a49.003.png)

**Política de Encriptação Aceitável**

**Informe de uso livre:** *Esta política foi criada pelo instituto SANS para a comunidade da internet. Esta política pode ser usada livremente de forma total ou parcial por sua organização. Não é necessária aprovação prévia. Caso deseje contribuir atualizando esta política ou na criação de uma nova, por favor envie um email para <policy-resources@sans.org>.*

**Status da última atualização:** *junho de 2014*
1. # **Visão geral**
Ler Propósito.
1. # **Propósito**
O propósito desta política é fornecer diretrizes que limitem o uso de encriptação em algoritmos que receberam revisões públicas significativas e que tenham sua eficácia comprovada. Adicionalmente, esta política provê orientações que asseguram o cumprimento de regulações federais, e garante autoridade legal para disseminação e uso de tecnologias de encriptação fora dos Estados Unidos da América.

1. # **Escopo**
Esta política se aplica a todos os funcionários e afiliados da <Nome da Empresa>.
1. # **Política**
   1. **Requisitos dos algoritmos**
      1. A encriptação utilizada deve cumprir ou exceder o conjunto definido como "Compatíveis com PAE" ou "Parcialmente compatíveis com PAE" de acordo com o [Catálogo de ](http://tools.ietf.org/html/draft-irtf-cfrg-cipher-catalog-01#section-3.1)[encriptação](http://tools.ietf.org/html/draft-irtf-cfrg-cipher-catalog-01#section-3.1)[ IETF/IRTF ](http://tools.ietf.org/html/draft-irtf-cfrg-cipher-catalog-01#section-3.1), ou o conjunto definido para uso pelo [Instituto Nacional de Padrões e Tecnologia dos Estados Unidos da América (NIST) na publicação FIPS 140-2](http://csrc.nist.gov/groups/STM/cmvp/documents/140-1/1401val2010.htm), ou ainda qualquer documento que o substitua, conforme a data de implementação. O uso de Padrões Avançados de Encriptação (PAE) é fortemente recomendado para encriptação simétrica.
      1. Os algoritmos utilizados devem cumprir as normas definidas na publicação do NIST [FIPS 140-2](http://csrc.nist.gov/groups/STM/cmvp/documents/140-1/1401val2010.htm) ou qualquer documento que a substitua, conforme a data de implementação. O uso dos algoritmos RSA e Criptografia de Curva Elíptica (CCE) é fortemente recomendado para encriptação assimétrica.
      1. Algoritmos de assinatura 


|**Algoritmo**|<p>**Comprimento da Chave**</p><p>**(mín.)**</p>|**Comentários Adicionais**|
| :-: | :-: | :-: |
|ECDSA|P-256|Considere [RFC6090](https://tools.ietf.org/html/rfc6090) para evitar violação de patente.  |
|RSA|2048|Deve usar um esquema de preenchimento seguro. É recomendado o esquema de preenchimento [PKCS#7](http://tools.ietf.org/html/rfc3852#section-6.3). Hash de mensagens necessário.|
|LDWM|SHA256|Consulte o Rascunho de Assinaturas com base na [LDWM](http://tools.ietf.org/html/draft-mcgrew-hash-sigs-00).|

1. **Requisitos das Funções Hash**

Em geral, a <Nome da Empresa> segue a Política [NIST para Funções Hash](http://csrc.nist.gov/groups/ST/hash/policy.html). 

1. **Definição e Autenticação de Chaves**
   1. As trocas de chaves devem usar um dos seguintes protocolos criptográficos: Diffie-Hellman, IKE ou curva elíptica Diffie-Hellman (CEPCD).
   1. Endpoints devem ser autenticados antes da troca ou derivação das chaves de sessão.
   1. Chaves públicas usadas para estabelecer conexões devem ser autenticadas antes do uso.  Exemplos de autenticação incluem a transmissão via mensagem assinada criptograficamente ou verificação manual de hash da chave pública.
   1. Todos os servidores usados para autenticação (por exemplo, RADIUS ou TADACS) devem ter instalado um certificado válido, assinado por um provedor confiável e reconhecido.
   1. Todos os servidores e aplicativos usando SSL ou TLS devem ter os certificados assinados por um provedor confiável e reconhecido. 
1. **Geração de Chaves**
   1. Chaves criptográficas devem ser geradas e armazenadas de uma forma segura, que evite perda, roubo ou comprometimento. 
   1. #### A geração de chaves deve ser obtida por um gerador de números aleatórios (RNG) padrão da indústria. Para exemplos, consulte [***Anexo NIST C: Geradores de Número Aleatório aprovados para o FIPS PUB 140-2***](http://csrc.nist.gov/publications/fips/fips140-2/fips1402annexc.pdf).  

1. # **Conformidade com a Política**
   1. Medição de Conformidade

A equipe Infosec irá verificar a conformidade com esta política através de vários métodos, incluindo, mas não se limitando, a: relatórios de ferramentas de negócios, auditorias internas e externas e feedbacks ao proprietário da política. 

1. Exceções

Qualquer exceção a esta política deve ser aprovada previamente pela equipe Infosec. 

1. Inconformidades

Funcionários identificados violando esta política estarão sujeitos a medidas disciplinares, que podem se estender até a demissão. 
5. # **Padronizações, Políticas e Processos relacionados**
[Instituto Nacional de Padrões e Tecnologia (NIST) publicação FIPS 140-2](http://csrc.nist.gov/groups/STM/cmvp/documents/140-1/1401val2010.htm);

[Política NIST para Funções Hash](http://csrc.nist.gov/groups/ST/hash/policy.html)
5. # **Definições e Termos**
As seguintes definições e termos podem ser encontradas no Glossário SANS, localizado no endereço:

https://www.sans.org/security-resources/glossary-of-terms/

- Encriptação Proprietária

5. # **Histórico de revisões**

|**Data da Alteração**|**Responsável**|**Resumo da alteração**|
| :- | :- | :- |
|**Jun. de 2014**|Equipe de Políticas SANS|Atualização e conversão para novo formato.|
|<h1>Set. de 2024</h1>|<h1>Equipe de Tradução IFPB</h1>|<h1>Tradução para Português do Brasil</h1>|

Instituto SANS 2014 — Todos os Direitos Reservados Página 3
