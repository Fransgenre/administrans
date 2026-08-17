<script setup>
import StepItem from '@/components/StepItem.vue'
import StepDetails from '@/components/StepDetails.vue'
import { useGlobalStore } from '@/store'
import { useSeoMeta } from '@vueuse/head'

useSeoMeta({
  title: `Changer d'état civil`,
  description: `Un guide pas à pas, pour votre changement d'état civil dans le cadre de votre transition administrative. Il est accompagné d'une checklist pour ne rien oublier`,
})
const store = useGlobalStore()
function foreignResidenceSwitch(foreign, local) {
  if (store.situation === 'françaisRésidantÀLétranger') {
    return foreign
  }
  return local
}
</script>

<template>
  <div class="grid--row">
    <div class="grid--column two-third">
      <section class="width--xnarrow my-4">
        <h1>Changer d'état civil</h1>
        <p class="text--italic">
          C'est souvent une étape importante dans une transition et pas la plus évidente ni la plus simple :
          changer d'état civil. Dans ce guide on part de zéro et on fait ça ensemble, pas à pas.
        </p>
        <p>
          <strong
            >Le terme état civil désigne ici les informations vous concernant officiellement
            garanties par l'état.</strong
          >
          Il s'agit notamment de votre prénom, nom, date et lieu de naissance, filiation. Elles
          peuvent apparaître dans votre acte de naissance, livret de famille, Carte Nationale
          d'Identité, ou tout autre document similaire produit par l'état.
        </p>
        <p>
          Dans le cadre d'une transition administrative, on cherche généralement à faire modifier
          deux informations :
        </p>
        <ul>
          <li>Le ou les prénoms</li>
          <li>La mention de sexe, (masculin/féminin)</li>
        </ul>
        <p>
          Il est possible de changer de prénom(s) sans changer de mention de sexe, et inversement.
        </p>
        <p>
          <a href="https://www.service-public.fr/particuliers/vosdroits/N31778">
            Service-public.fr</a> fournit une page très complète pour expliquer où et comment faire la démarche en fonction
          de votre situation. Nous utilisons cette page comme source par la suite.
        </p>
        <h3>À propos de la mention de sexe, du genre et de la civilité</h3>
        <p>La mention de sexe est souvent confondue avec le genre ou la civilité. En pratique ce sont deux choses distinctes :</p>
        <ul>
          <li>La mention de sexe est une notion légale</li>
          <li>Le genre et la civilité sont des notions sociales</li>
        </ul>
        <p>
          Cette distinction est importante, même si elle peut créer de la confusion.
          Vous pouvez en pratique demander à faire mettre à jour votre civilité auprès de différentes
          entreprises, banques, écoles ou universités par exemple et ce même si votre mention de sexe à l'état civil n'a pas encore bougé.
        </p>
        <p>
          Compte tenu des lois discriminatoires à l'égard des personnes trans en France, 
          <strong>le changement de mention de sexe à l'état civil peut bloquer votre accès à la PMA, à la conservation
          de vos gamètes et à l'accès à vos gamètes déjà prélevés</strong> avant un changement d'état civil.
          Il peut être nécessaire d'en tenir compte avant d'entamer un changement de mention de sexe si vous êtes concerné·e.
        </p>

      </section>
      <section class="width--xnarrow my-4">
        <h2>Comment faire ?</h2>
        <p>En France, il existe deux manières de procéder pour changer d'état civil.</p>
        <p>
          <strong
            >Quelle que soit la méthode que vous choisissez, le résultat final est le même.</strong
          >
          La ou les décisions vont faire modifier votre acte de naissance, et vous permettre
          d'utiliser votre nouvel état civil. Certaines personnes préfèrent la première méthode pour
          tout faire en une fois, d'autres la seconde pour pouvoir avancer plus rapidement sur leur
          changement de prénom.
        </p>
        <p>

          Indiquer votre situation :
          <select
          name="situation"
          id="situation"
          :value="store.situation"
          @input="store.setSituation($event.target.value)"
          >
          <option value="françaisRésidantEnFrance">Vous êtes français·e et résidez en France</option>
          <option value="françaisRésidantÀLétranger">Vous êtes français·e et résidez à l'étranger</option>
          <option value="françaisNéÀLétranger">Vous êtes français·e né·e à l'étranger</option>
          <option value="réfugié">Vous êtes réfugié·e, apatride ou bénéficiaire de la protection subsidiaire (Ofpra)</option>
          </select>
        </p>
        <div class="message--primary my-2 px-2 py-2">
          <h3>En une fois, au tribunal</h3>
          <p>
            On fait modifier le(s) prénom(s) en même temps que la mention de sexe, via une requête
            adressée au tribunal.
          </p>
          <div class="grid--row">
            <div class="grid--column">
              <p><strong>Avantages</strong> :</p>
              <ul>
                <li>Un seul dossier à constituer</li>
                <li>Plus rapide pour la procédure dans son ensemble</li>
                <li>
                  On peut directement refaire ses papiers d'identité finaux une fois la décision
                  rendue
                </li>
              </ul>
            </div>
            <div class="grid--column">
              <p><strong>Inconvénients</strong> :</p>
              <ul>
                <li>
                  Incohérences de traitement selon les tribunaux qui peuvent ralentir la décision
                </li>
                <li>
                  On attend plus de temps avant de pouvoir utiliser officiellement son ou ses
                  nouveaux prénom(s)
                </li>
                <li>
                  Payant (50€) depuis mars 2026 comment toute procédure juridique
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="message--primary my-2 px-2 py-2">
          <h3>
            En deux fois,
            {{ foreignResidenceSwitch('au poste consulaire', 'à la mairie') }}
            puis au tribunal
          </h3>
          <p>
            On fait modifier le(s) prénom(s)
            {{ foreignResidenceSwitch('au poste consulaire', 'à la mairie') }}
            puis, dans un second temps, la mention de
            sexe au tribunal.
          </p>
          <div class="grid--row">
            <div class="grid--column">
              <p><strong>Avantages</strong> :</p>
              <ul>
                <li>
                  On peut obtenir une décision plus rapidement pour ses nouveaux prénoms,
                  typiquement en quelques semaines à quelques mois
                </li>
                <li>La démarche {{ foreignResidenceSwitch('au poste consulaire', 'à la mairie') }} est plus simple qu'au tribunal</li>
              </ul>
            </div>
            <div class="grid--column">
              <p><strong>Inconvénients</strong> :</p>
              <ul>
                <li>Deux dossiers à constituer</li>
                <li>
                  Il y a une période où l'on a un prénom a jour, mais une mention de sexe obsolète.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="width--xnarrow my-4">
        <h2>Les étapes en détail</h2>
        <p>
          Ici, on vous explique très précisément comment constituer votre dossier pour qu'il aie les
          meilleurs chances de passer. Certaines des étapes peuvent être menées en parallèle pour
          gagner du temps.
        </p>
        <p>
          Nous vous invitons à faire usage de la checklist pour garder une trace de votre
          progression : elle est conservée d'une visite à l'autre et vous aidera à vous y retrouver.
        </p>
        <p>
          Commencez par choisir votre parcours :
          <select
            name="method"
            id="method"
            :value="store.CecMethod"
            @input="store.setCecMethod($event.target.value)"
          >
            <option value="prénomEtSexe">Prénom et mention de sexe en une fois</option>
            <option value="prénomPuisSexe">Prénom et mention de sexe indépendamment</option>
          </select>
        </p>
        <StepDetails stepId="chooseNames">
          <h3>Choisir vos prénoms</h3>
          <p>
            Il s'agit d'un choix très personnel, évidemment, mais voici quelques informations qui
            pourront vous aider :
          </p>
          <ul>
            <li>
              Il n'y a théoriquement pas de limite au nombre de prénoms que vous pouvez choisir,
              même si pour des raisons pratiques, il est possible qu'on vous refuse un nombre trop
              élevé. Dans la nature, des cas de personnes ayant demandé et obtenu 7, voire 10
              prénoms ont été recensés !
            </li>
            <li>
              Vous êtes totalement libre sur l'orthographe, et vous pouvez inventer vos propres
              prénoms si vous le souhaitez
            </li>
          </ul>
          <p>
            Si vous avez fait votre choix, vous pouvez renseigner vos prénom(s) souhaité(s) ici, ce qui pré-remplira le
            champ correspondant dans les différents formulaires proposés par le site :
          </p>
          <label for="prenoms">
            Nouveau(x) prénom(s), séparés par une virgule
          </label>
          <input type="text" name="prenoms" id="prenoms" :value="store.formData.prénom"
            @input="store.persistFormData({ prénom: $event.target.value })">
        </StepDetails>
        <StepDetails stepId="requestBirthCertificates">
          <h3>Demander des copies intégrales de votre acte de naissance</h3>
          <p>
            Ces copies vont permettre de justifier de votre identité et sont indispensables pour la
            suite de la procédure.
          </p>
          <p>
            Elles sont à demander à votre commune de naissance, consultez pour cela
            <a href="https://www.service-public.fr/particuliers/vosdroits/F1427" target="_blank"
              >service-public.fr</a
            >
            qui vous indiquera précisément la marche à suivre.
          </p>
          <p>
            Nous vous recommandons de faire cette demande le plus tôt possible, dans la mesure où
            elle est gratuite et que certaines communes mettent parfois un peu de temps à vous
            envoyer les documents. Prenez au moins 3 copies, ce n'est jamais perdu.
          </p>
        </StepDetails>
        <StepDetails stepId="prepareProofs">
          <h3>Rassembler vos justificatifs</h3>
          <p>Certains justificatifs sont incontournables pour que votre demande puisse aboutir :</p>
          <ul>
            <li>Une copie intégrale de votre acte de naissance</li>
            <li>Une photocopie recto-verso de votre carte d'identité ou passeport</li>
            <li>
              <a href="https://www.service-public.fr/particuliers/vosdroits/F1028" target="_blank"
                >Un justificatif de domicile récent</a
              >
            </li>
          </ul>
          <p>
            D'autres justificatifs peuvent aider à montrer le bien fondé de votre demande, notamment
            :
          </p>
          <ul>
            <li>
              Des attestations de vos proches, ami·es, collègues, famille… Avec chaque attestation,
              vous devez transmettre une copie recto-verso de la CNI ou du passeport de la personne
              qui l'a rédigée.
              <br />
              <RouterLink to="/documents/attestation-temoignage" class="button my-2">
                Générer vos attestations
              </RouterLink>
            </li>
            <li>
              Des factures, captures d'écrans, courriers d'entreprises qui utilisent votre prénom ou
              genre revendiqué.
            </li>
          </ul>
          <p>
            Ces justificatifs servent à démontrer que votre genre et/ou prénom(s) revendiqués sont
            déjà utilisés dans votre vie quotidienne.
          </p>
          <p>
            Nous vous rappelons qu’il n’est pas nécessaire de fournir des justificatifs médicaux ou des photos,
            seules les attestations de proches ou tout autre document démontrant votre identité au sein de la
            société suffisent.
          </p>
          <p>
            N’ayez pas peur de fournir tous les documents en votre possession si vous êtes persuadé·e qu’ils
            sont utiles et apportent un supplément utile à l’ensemble de votre dossier.
          </p>
          <p>
            N’hésitez pas à vous rapprocher
            <a href="https://wikitrans.co/carte">d’une association d’autosupport de votre région</a>.
            Elles peuvent vous accompagner sur la procédure,
            d’autant plus qu’elles connaissent sûrement les spécificités de votre ville
            et pourront vous recommander quel document inclure ou ne pas inclure.
            Si vous êtes une personne isolée, elles pourront vous aider sur la production de témoignages par exemple.
            Certaines associations, comme <a href="https://fransgenre.fr/">Fransgenre</a>,
            recensent les difficultés rencontrées dans certains tribunaux et services d’état civil en France.
          </p>
        </StepDetails>
        <StepDetails stepId="prepareRequest" v-if="store.CecMethod === 'prénomEtSexe'">
          <h3>Préparer votre demande</h3>
          <p>
            Vous allez maintenant produire le document de demande de changement de prénom et de
            mention de sexe, à adresser
            
            <template v-if="store.situation === 'réfugié'">
              <a href="https://lannuaire.service-public.fr/ile-de-france/paris/df25f052-8dbf-492f-90b8-f32ff6a925de">
                au Tribunal de Paris.
              </a>
            </template>
            <template v-else-if="store.situation === 'françaisNéÀLétranger'">
              <a href="https://lannuaire.service-public.fr/pays-de-la-loire/loire-atlantique/59edbec7-feb1-49aa-bb94-5f6c316b9093">
                au Tribunal de Nantes</a> car vous êtes né·e à l'étranger.
            </template>
            <template v-else-if="store.situation === 'françaisRésidantEnFrance'">
              au tribunal de votre ville de résidence ou de naissance.
            </template>
            <template v-else-if="store.situation === 'françaisRésidantÀLétranger'">
              au tribunal de la ville dans laquelle vous élirez domiciliation.
              Nous ne connaissons pas précisément la méthode à employer pour l'élection de domicile.
              Cela demande apparemment de faire établir une attestation de domiciliation auprès d'un particulier, d'un organisme ou d'un avocat.
            </template>
            
          </p>
          <RouterLink to="/documents/requete-changement-etat-civil-tribunal" class="button my-2">
            Générer votre demande de changement de prénom et de mention de sexe
          </RouterLink>
        </StepDetails>
        <StepDetails stepId="prepareRequestName" v-if="store.CecMethod === 'prénomPuisSexe'">
          <h3>Préparer votre demande de changement de prénom</h3>
          <p>
            Vous allez maintenant produire le document de demande de changement de prénom, à
            adresser  
            <template v-if="store.situation === 'françaisRésidantÀLétranger'">
              <a href="https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/organisation-et-annuaires/ambassades-et-consulats-francais-a-l-etranger/">
                à l'ambassade ou poste consulaire compétent.
              </a>
            </template>
            <template v-else>
              au service d'état civil de votre commune de résidence.
            </template>
          </p>

          <RouterLink to="/documents/changement-prenom-mairie" class="button my-2">
            Générer votre demande de changement de prénom
          </RouterLink>
        </StepDetails>
        <StepDetails stepId="prepareRequestCourt" v-if="store.CecMethod === 'prénomPuisSexe'">
          <h3>Préparer votre demande de changement de mention de sexe</h3>
          <p>
            Une fois que votre demande de changement de prénom aura abouti et que vous aurez reçu la
            décision du service d'état civil, il vous faudra rédiger une requête de changement de
            mention de sexe, et l'adresser au tribunal de votre ville de résidence ou
            de naissance.
          </p>
          <p>
            Pour cette seconde demande, pensez à joindre à votre dossier la décision de changement
            dé prénom fournie par le service d'état civil.
          </p>
          <RouterLink to="/documents/requete-changement-etat-civil-tribunal" class="button my-2">
            Générer votre demande de changement de mention de sexe
          </RouterLink>
        </StepDetails>

        <StepDetails stepId="boughtFiscalStamp">
          <h3>Acheter un timbre fiscal</h3>
          <p><strong>Cela est nécessaire que pour la procédure au tribunal.</strong>
          La procédure en mairie (changement de prénom seul), il ne faut pas la faire.</p>
          <p>Depuis le 1er mars 2026 toutes procédure juridique nécessite un timbre fiscal de 50€,
          Pour cela rendez-vous sur <a href="https://timbres.impots.gouv.fr"> le site des impots</a></p>
          <ul>
            <li>sélectionner: "Acheter un timbre électronique"</li>
            <li>sélectionner: "Je souhaite acheter un timbre justice"</li>
            <li>sélectionner: "Introduire une instance devant un tribunal judiciaire ou un conseil des prud'hommes"</li>
          </ul>
        </StepDetails>

        <StepDetails stepId="submitRequest">
          <h3>Déposer votre demande</h3>
          <p>Pour déposer votre demande, deux choix s'offrent à vous :</p>
          <ul>
            <li><strong>Fortement conseillé :</strong> Une remise en main propre, directement au service d'état civil ou au tribunal.</li>
            <li>Un envoi par courrier, en recommandé, uniquement pour les demandes adressées au tribunal.</li>
          </ul>
          <p><strong>Le document de demande doit être daté et signé.</strong></p>
          <p>
            Lorsque vous déposez votre demande en main propre, demandez systématiquement un reçu ou un
            document attestant du dépôt. Cela vous permettra de suivre l'avancée de la procédure, et
            de relancer si nécessaire.
          </p>
          <p>
            N'hésitez pas non plus à demander quels sont les délais habituels de traitement, cela
            vous permettra d'avoir une meilleure idée du temps que vous devrez patienter.
          </p>
        </StepDetails>
        <StepDetails stepId="wait">
          <h3>Attendre le résultat de la procédure</h3>
          <p>Votre demande est déposée, maintenant vous n'avez plus qu'à attendre.</p>
          <p>
            {{ foreignResidenceSwitch('Au poste consulaire', 'À la mairie') }}, les délais vont généralement de quelques semaines à trois ou quatre mois,
            mais cela dépend évidemment de chaque endroit.
          </p>
          <p>
            Au tribunal, les délais sont plus long et le traitement d'une demande peut prendre entre
            six mois et deux ans. Là encore, cela dépend de la commune et de la bonne volonté des
            personnes qui traitent votre demande.
          </p>
          <p>
            Pour demande au tribunal, il n'est pas rare que vous receviez par courrier des demandes
            de documents complémentaires. Répondez-y dans la mesure du possible soit par courrier,
            soit via une remise en main propre.
          </p>
          <p>
            Il pourra également vous être demandé de vous rendre à une audience sur place. Ce n'est
            pas systématique mais cela arrive. Si tel est le cas, nous vous recommandons fortement
            d'y aller accompagné·e et de prendre contact avec des associations locales pour en
            savoir plus sur l'attitude à adopter : parfois il s'agit d'une simple formalité, parfois
            non.
          </p>
          <p>
            Il ne faut vraiment pas hésiter à appeler ponctuellement {{ foreignResidenceSwitch('le poste consulaire', 'la mairie') }} ou le tribunal pour
            savoir où en est votre demande. Il n'est pas rare que les courriers se perdent, et
            certaines personnes ont attendu plusieurs mois d'être notifié d'une décision qui avait
            déjà été rendue.
          </p>
        </StepDetails>
        <StepDetails stepId="notification">
          <h3>Recevoir la notification de décision</h3>
          <p>
            Une fois votre demande validée, {{ foreignResidenceSwitch('le poste consulaire', 'la mairie') }} ou le tribunal vous enverront systématiquement
            un courrier.
          </p>
          <p>
            <strong
              >Ce courrier contient la décision ou le jugement et doit être conservé précieusement,
              photocopié et/ou scanné</strong
            >. Il peut notamment vous servir à attester de votre identité en attendant d'avoir
            refait vos papiers, ou à justifier de vos changements d'état civil pour d'autres
            démarches.
          </p>
          <p><strong>Chronologie</strong></p>
          <p>
            Au moment de la réception du courrier, plusieurs choses se déclenchent automatiquement
            sans que vous ayez à intervenir :
          </p>
          <ol>
            <li>
              Le service d'état civil ou le tribunal notifient votre commune de naissance du
              changement
            </li>
            <li>Votre commune de naissance mets à jour votre acte de naissance</li>
            <li>L'INSEE est notifiée du changement</li>
            <li>L'INSEE informe différents organismes (impôts, CPAM, par exemple) du changement</li>
          </ol>
          <p>
            Les étapes 1 et 2 se font généralement sous deux à trois mois, les étapes trois et
            quatre sous six mois.
          </p>
          <p>
            Dès l'étape 2 réalisée, nous vous recommandons vivement de redemander plusieurs extraits
            d'actes de naissance auprès de votre commune de naissance pour pouvoir refaire vos
            papiers d'identité et votre carte vitale.
          </p>
          <p>
            Parfois, l'INSEE ne fait pas automatiquement les étapes trois et quatre. Dans ce cas là,
            il faut
            <a href="https://www.service-public.fr/particuliers/vosdroits/R49454" target="blank"
              >les contacter via un formulaire dédié</a
            >.
          </p>
          <p><strong>Sécurité sociale</strong></p>
          <p>
            Lorsque la mention de changement de sexe est répercutée auprès de la sécurité sociale,
            plusieurs choses se produisent :
          </p>
          <ul>
            <li>
              Vous pouvez perdre accès à votre compte Ameli. C'est normal mais stressant car cela
              arrive sans prévenir. Il faut contacter Ameli par téléphone et leur expliquer la
              situation.
            </li>
            <li>
              Vous obtiendrez un nouveau numéro de sécurité sociale. Le premier chiffre sera mis à
              jour pour refléter votre nouveau genre (1 pour les hommes, 2 pour les femmes)
            </li>
            <li>Vous devrez demander une nouvelle carte vitale</li>
          </ul>
          <p>
            <a href="https://wikitrans.co/2019/12/16/changement-de-numero-de-securite-sociale/">
              Wikitrans propose un article très complet sur cette question </a
            >, vous y trouverez certainement les réponses que vous cherchez.
          </p>
        </StepDetails>
        <StepDetails stepId="party">
          <h3>🎉 Célébrer 🎉</h3>
          <p>De tout cœur, bravo !</p>
          <p>
            On est passé·es par là aussi et on sait à quel point tout le processus peut être lent,
            usant, crevant, absurde et brutal.
          </p>
          <p>
            On vous souhaite du repos et de la sérénité après tout ça.N'hésitez pas à nous écrire si
            vous avez trouvé Administrans utile, ou si vous souhaitez nous suggérer des
            améliorations !
          </p>
          <RouterLink to="/a-propos#contact" class="button inverted"> Nous écrire </RouterLink>
        </StepDetails>
      </section>
    </div>
    <div class="grid--column one-third">
      <aside class="position--sticky my-4" id="checklist">
        <h2>Checklist</h2>
        <StepItem stepId="setSituation" :link="false">
          Indiquer votre situation :
          <select
            name="situation"
            id="situation"
            :value="store.situation"
            @input="store.setSituation($event.target.value)"
          >
            <option value="françaisRésidantEnFrance">Vous êtes français·e et résidez en France</option>
            <option value="françaisRésidantÀLétranger">Vous êtes français·e et résidez à l'étranger</option>
            <option value="françaisNéÀLétranger">Vous êtes français·e né·e à l'étranger</option>
            <option value="réfugié">Vous êtes réfugié·e, apatride ou bénéficiaire de la protection subsidiaire (Ofpra)</option>
          </select>
        </StepItem>
        <StepItem stepId="chooseCecMethod" :link="false">
          Choisir votre parcours :
          <select
            name="method"
            id="method"
            :value="store.CecMethod"
            @input="store.setCecMethod($event.target.value)"
          >
            <option value="prénomEtSexe">Prénom et mention de sexe en une fois</option>
            <option value="prénomPuisSexe">Prénom et mention de sexe indépendamment</option>
          </select>
        </StepItem>
        <StepItem stepId="chooseNames" :link="true"> <span id="prenoms-checklist-label">Choisir vos prénoms</span>
          <template #after-link>
            <input aria-labelledby="prenoms-checklist-label" type="text" name="prenoms-checklist" id="prenoms-checklist"
              placeholder="Ex. : Prénom1, Prénom 2"
              :value="store.formData.prénom" @input="store.persistFormData({ prénom: $event.target.value })">
          </template>
        </StepItem>
        <StepItem stepId="requestBirthCertificates">
          Demander des copies intégrales de votre acte de naissance
        </StepItem>
        <template v-if="store.CecMethod === 'prénomEtSexe'">
          <StepItem stepId="prepareProofs"> Rassembler vos justificatifs </StepItem>
          <StepItem stepId="prepareProofsBirthCertificate" class="mx-2" :link="false">
            Copie d'acte de naissance
          </StepItem>
          <StepItem stepId="prepareProofsId" class="mx-2" :link="false">
            Copie de votre CNI ou Passeport
          </StepItem>
          <StepItem stepId="prepareProofsHome" class="mx-2" :link="false">
            Justificatif de domicile
          </StepItem>
          <StepItem stepId="prepareProofsSocial" class="mx-2" :link="false">
            Attestations de proches
          </StepItem>

          <template v-if="store.CecMethod === 'prénomEtSexe'">
            <StepItem stepId="boughtFiscalStamp" class="mx-2" > Acheter un timbre fiscal </StepItem>
          </template>

          <StepItem stepId="prepareRequest"> Préparer votre demande </StepItem>
          <StepItem stepId="submitRequest"> Déposer où envoyer votre demande </StepItem>
          <StepItem stepId="wait"> Attendre la décision </StepItem>
          <StepItem stepId="notification"> Recevoir la notification </StepItem>
          <StepItem stepId="party"> Célébrer </StepItem>
        </template>
        <template v-else>
          <StepItem stepId="submitRequestNames" :link="false">
            Changement de prénom {{ foreignResidenceSwitch('au poste consulaire', 'à la mairie') }}
          </StepItem>
          <StepItem stepId="prepareProofs" class="mx-2"> Rassembler vos justificatifs </StepItem>
          <StepItem stepId="prepareProofsBirthCertificateNames" class="mx-4" :link="false">
            Copie d'acte de naissance
          </StepItem>
          <StepItem stepId="prepareProofsIdNames" class="mx-4" :link="false">
            Copie de votre CNI ou Passeport
          </StepItem>
          <StepItem stepId="prepareProofsHomeNames" class="mx-4" :link="false">
            Justificatif de domicile
          </StepItem>
          <StepItem stepId="prepareProofsSocialNames" class="mx-4" :link="false">
            Attestations de proches
          </StepItem>

          <StepItem stepId="prepareRequestName" class="mx-2"> Préparer votre demande </StepItem>

          <StepItem stepId="submitRequestName" class="mx-2" linkTo="submitRequest">
            Déposer votre demande
          </StepItem>
          <StepItem stepId="waitName" class="mx-2" linkTo="wait"> Attendre la décision </StepItem>

          <StepItem stepId="notificationName" class="mx-2" linkTo="notification">
            Recevoir la notification
          </StepItem>
          <StepItem stepId="party" class="mx-2"> Célébrer </StepItem>

          <StepItem stepId="changeGenderStatement" :link="false">
            Changement de mention de sexe au tribunal
          </StepItem>
          <StepItem stepId="prepareProofsCourt" class="mx-2" linkTo="prepareProofs">
            Rassembler vos justificatifs
          </StepItem>
          <StepItem stepId="prepareProofsBirthCertificateCourt" class="mx-4" :link="false">
            Copie d'acte de naissance
          </StepItem>
          <StepItem stepId="prepareProofsIdCourt" class="mx-4" :link="false">
            Copie de votre CNI ou Passeport
          </StepItem>
          <StepItem stepId="prepareProofsHomeCourt" class="mx-4" :link="false">
            Justificatif de domicile
          </StepItem>
          <StepItem stepId="prepareProofsSocialCourt" class="mx-4" :link="false">
            Attestations de proches
          </StepItem>

          <StepItem stepId="boughtFiscalStamp" class="mx-4" > Acheter un timbre fiscal </StepItem>

          <StepItem stepId="prepareProofsNameCHangeCourt" class="mx-4" :link="false">
            Décision de changement de prénom transmise par l'état civil
          </StepItem>

          <StepItem stepId="prepareRequestCourt" class="mx-2"> Préparer votre demande </StepItem>

          <StepItem stepId="submitRequestCourt" class="mx-2" linkTo="submitRequest">
            Déposer votre demande
          </StepItem>

          <StepItem stepId="waitCourt" class="mx-2" linkTo="wait"> Attendre la décision </StepItem>

          <StepItem stepId="notificationCourt" class="mx-2" linkTo="notification">
            Recevoir la notification
          </StepItem>
          <StepItem stepId="party" class="mx-2"> Célébrer </StepItem>
        </template>
      </aside>
      <RouterLink
        to="#checklist"
        class="button inverted desktop--hidden"
        style="position: fixed; right: var(--space-medium); bottom: var(--space-medium)"
      >
        Afficher la checklist
      </RouterLink>
    </div>
  </div>
</template>
