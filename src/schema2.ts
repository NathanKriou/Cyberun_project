export const schema2 = {
  type: "object",
  properties: {
    jobTitle: { type: "string", title: "Titre du poste" },
    company: { type: "string", title: "Entreprise" },
    yearsExperience: {
      type: "integer",
      title: "Années d'expérience",
      minimum: 0 // Assurer que le nombre soit positif ou égal à 0
    },
    diploma: { type: "string", title: "Nom du diplôme" }, // Remplacement de 'hobby' par 'diploma'
    institution: { type: "string", title: "Établissement" } // Remplacement de 'sport' par 'institution'
  }
};

export const uiSchema2 = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Professionnel",
      elements: [
        { type: "Control", scope: "#/properties/jobTitle" },
        { type: "Control", scope: "#/properties/company" },
        { type: "Control", scope: "#/properties/yearsExperience" }
      ]
    },
    {
      type: "Category",
      label: "Diplôme", // Remplacement de 'Loisirs' par 'Diplôme'
      elements: [
        { type: "Control", scope: "#/properties/diploma" },
        { type: "Control", scope: "#/properties/institution" } // Remplacement de 'sport' par 'institution'
      ]
    }
  ]
};

export const data2 = {
  jobTitle: "",
  company: "",
  yearsExperience: null,
  diploma: "", // Remplacement de 'hobby' par 'diploma'
  institution: "" // Remplacement de 'sport' par 'institution'
};