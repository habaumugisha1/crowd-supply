import Dental from "../../../images/dental.jpg";
import Intrument from "../../../images/intrument.png";
import Maternent from "../../../images/maternity.jpg";
import MedicalConsumable from "../../../images/medical-consumable.jpg";
import MedicalGenaral from "../../../images/medical-general-eq.jpg";
import MedicalLaboratory from "../../../images/medical-laboratory.jpg";
import Sterilization from "../../../images/sterilization.jpg";

export const subCategoriesProductData = [

    {
      "id": 1,
      "name": "General medical Consumable",
      "subCategoryId":1,
      "code": "#40510",
      "image": MedicalConsumable,
      "description": "General Equipment for hospitals",
},

    {
      "id": 2,
      "name": "Medical general equipment",
      "subCategoryId":1,
      "code": "#405%",      "image": Intrument,
      "description": "Laboratory equipment for hospitals",
},

    {
      "id": 3,
      "name": "laboratory equipments",
      "subCategoryId":2,
      "code": "#405198",
      "image": Maternent,
      "description": "Hospital Furniture for hospitals",
    },

    {
      "id": 4,
      "name": "Dental medical and equipment",
      "subCategoryId":3,
      "code": "#412",
      "image": Dental,
      "description": "Hospital Furniture for hospitals",
    },

    {
      "id": 5,
      "name": "General medical",
      "subCategoryId":4,
      "code": "#4054",
      "image": MedicalGenaral,
      "description": "Hospital Furniture for hospitals",
    },

    {
      "id": 6,
      "name": "Hospital ",
      "subCategoryId":2,
      "code": "#40511",
      "image": MedicalLaboratory,
      "description": "Hospital Furniture for hospitals",
    },
    {
      "id": 7,
      "name": "Furniture",
      "subCategoryId":2,
      "code": "#4023",
      "image": Sterilization,
      "description": "Hospital Furniture for hospitals",
    },

  ]