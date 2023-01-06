import emailjs from "@emailjs/browser";

// const apiKey = "";
// const apiURL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + apiKey;
// const sendEmailValidationRequest = async (email) => {
//   try {
//     const response = await fetch(apiURL + "&email=" + email);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     throw error;
//   }
// };

const sendPartecipazione = (partecipazione) => {
  let msg =
    partecipazione.partecipa === 1
      ? `Ciao Irene e Carlo, ${
          parseInt(partecipazione.npartecipanti) > 1
            ? "comunichiamo che parteciperemo"
            : "comunico che parteciperò"
        } al vostro matrimonio, di seguito alcuni dati:\nNumero Partecipanti: ${
          partecipazione.npartecipanti
        }.\nAllergie: ${partecipazione.allergie}.\nTrasporto: ${
          partecipazione.mezzo === 0
            ? "In auto"
            : partecipazione.mezzo === 1
            ? "In treno"
            : "In aereo"
        }\nInoltre, ${
          partecipazione.notte === 1
            ? "Venendo da fuori farebbe utile il pernottamento per la notte del 27"
            : "Non c'è bisogno del pernottamento"
        }\n ${partecipazione.nome} (${partecipazione.email})`
      : `Ciao Irene e Carlo, purtroppo non posso esserci!\n${partecipazione.nome} (partecipazione.email)`;
  console.log(msg);
  emailjs.send(
    "service_adt1olr",
    "template_lpxwzii",
    {
      from_name: partecipazione.nome,
      to_name: "Irene e Carlo",
      message: msg,
    },
    "Wz2M13Mjf-SBDx4_5"
  );
};

export { sendPartecipazione };

// emailjs.send("service_adt1olr","template_lpxwzii",{
//   from_name: "Marco",
//   to_name: "Irene e Carlo",
//   message: "Prova",
//   });
