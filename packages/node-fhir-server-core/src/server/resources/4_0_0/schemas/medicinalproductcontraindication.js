/**
 * @name exports
 * @summary MedicinalProductContraindication Class
 */
module.exports = class MedicinalProductContraindication {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });

    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'subject', {
      enumerable: true,
      get: () => this.__data.subject,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.subject = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'disease', {
      enumerable: true,
      get: () => this.__data.disease,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.disease = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'diseaseStatus', {
      enumerable: true,
      get: () => this.__data.diseaseStatus,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.diseaseStatus = new CodeableConcept(value);
      },
    });

    Object.defineProperty(this, 'comorbidity', {
      enumerable: true,
      get: () => this.__data.comorbidity,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let CodeableConcept = require('./codeableconcept.js');
        this.__data.comorbidity = Array.isArray(value)
          ? value.map((v) => new CodeableConcept(v))
          : [new CodeableConcept(value)];
      },
    });

    Object.defineProperty(this, 'therapeuticIndication', {
      enumerable: true,
      get: () => this.__data.therapeuticIndication,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.therapeuticIndication = Array.isArray(value)
          ? value.map((v) => new Reference(v))
          : [new Reference(value)];
      },
    });

    Object.defineProperty(this, 'otherTherapy', {
      enumerable: true,
      get: () => this.__data.otherTherapy,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let MedicinalProductContraindicationOtherTherapy = require('./medicinalproductcontraindicationothertherapy.js');
        this.__data.otherTherapy = Array.isArray(value)
          ? value.map((v) => new MedicinalProductContraindicationOtherTherapy(v))
          : [new MedicinalProductContraindicationOtherTherapy(value)];
      },
    });

    Object.defineProperty(this, 'population', {
      enumerable: true,
      get: () => this.__data.population,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Population = require('./population.js');
        this.__data.population = Array.isArray(value)
          ? value.map((v) => new Population(v))
          : [new Population(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'MedicinalProductContraindication',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'MedicinalProductContraindication';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      subject: this.subject && this.subject.map((v) => v.toJSON()),
      disease: this.disease && this.disease.toJSON(),
      diseaseStatus: this.diseaseStatus && this.diseaseStatus.toJSON(),
      comorbidity: this.comorbidity && this.comorbidity.map((v) => v.toJSON()),
      therapeuticIndication:
        this.therapeuticIndication && this.therapeuticIndication.map((v) => v.toJSON()),
      otherTherapy: this.otherTherapy && this.otherTherapy.map((v) => v.toJSON()),
      population: this.population && this.population.map((v) => v.toJSON()),
    };
  }
};
