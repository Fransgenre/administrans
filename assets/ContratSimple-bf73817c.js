import{u as m}from"./templates-9178b7b0.js";import{o as n,c as s,a,b as i,t,F as o,d as l,e as c,u as d}from"./index-e3b69503.js";const h={class:"grid--row"},V={class:"grid--column"},v={key:0,class:"adress--sender"},f=a("br",null,null,-1),g=a("br",null,null,-1),b=a("br",null,null,-1),y={key:0,class:"grid--column date"},j={key:0,class:"adress--recipient"},C={__name:"LetterHeader",props:{data:{type:Object,required:!0},renderValue:{}},setup(e){return(u,r)=>(n(),s(o,null,[a("div",h,[a("div",V,[e.renderValue("adresse")?(n(),s("div",v,[i(t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1),f,i(t(e.renderValue("adresse"))+" ",1),e.data.téléphone?(n(),s(o,{key:0},[g,i("Téléphone : "+t(e.renderValue("téléphone")),1)],64)):l("",!0),e.data.email?(n(),s(o,{key:1},[b,i("Email : "+t(e.renderValue("email")),1)],64)):l("",!0)])):l("",!0)]),e.data.villeCourrier&&e.data.dateCourrier?(n(),s("div",y,t(e.renderValue("villeCourrier"))+", le "+t(new Date(e.data.dateCourrier).toLocaleDateString("fr-FR")),1)):l("",!0)]),e.renderValue("adresseDestinataire")?(n(),s("div",j,[i(" À l'attention du service client"),e.data.société?(n(),s(o,{key:0},[i(" de "+t(e.renderValue("société",!1)),1)],64)):l("",!0)])):l("",!0)],64))}},k={class:"signature"},p=a("p",null,"Pièces jointes :",-1),$={class:"attachments"},_={__name:"LetterFooter",props:{data:{type:Object,required:!0},renderValue:{}},setup(e){return(u,r)=>(n(),s(o,null,[a("p",k,t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1),e.data.listerPJ?(n(),s(o,{key:0},[p,a("ul",$,[a("li",null," Copie des pièces d'identité de "+t(e.renderValue("prénom"))+" "+t(e.renderValue("nom"))+" et décision de changement de prénom de "+t(e.renderValue("prénom"))+" "+t(e.renderValue("nom")),1)])],64)):l("",!0)],64))}},x=a("p",{class:"subject"},"Objet : Mise à jour de mes informations d'état-civil",-1),J=a("p",null,"Madame, Monsieur,",-1),L=a("p",null," En vertu de la décision de changement de prénom délivrée par l'État-Civil, je vous prie de bien vouloir changer mon prénom dans vos registres. ",-1),M=a("p",null," Je vous remercie de l'aide que vous m'apporterez dans ma démarche et vous prie de bien vouloir croire, Madame, Monsieur, en l'assurance de ma considération, ",-1),q={__name:"ContratSimple",props:{data:{type:Object}},setup(e){const u=e,{renderValue:r}=m(u);return(D,F)=>(n(),s(o,null,[c(C,{data:u.data,renderValue:d(r)},null,8,["data","renderValue"]),x,J,a("p",null," Je suis "+t(d(r)("prénom"))+" "+t(d(r)("nom"))+" et j'ai récemment obtenu mon changement de prénom à l'État-Civil. Je souhaite faire mettre à jour les informations me concernant dans vos registres. ",1),a("p",null," Je suis titulaire d'un contrat auprès de "+t(d(r)("société","votre société"))+" sous la référence "+t(d(r)("refContrat"))+". Le nom associé actuellement à ce contrat est "+t(d(r)("deadname"))+" "+t(d(r)("nom"))+". ",1),L,M,c(_,{data:u.data,renderValue:d(r)},null,8,["data","renderValue"])],64))}};export{q as default};
