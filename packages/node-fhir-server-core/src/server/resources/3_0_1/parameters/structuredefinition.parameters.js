/**
 * @name exports
 * @static
 * @summary Arguments for the structuredefinition query
 */
module.exports = {
  abstract: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.abstract',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract',
    description: 'Whether the structure is abstract',
  },
  base: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'StructureDefinition.baseDefinition',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base',
    description: 'Definition that this type is constrained/specialized from',
  },
  'base-path': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.snapshot.element.base.path',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path',
    description: 'Path that identifies the base element',
  },
  'context-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.contextType',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type',
    description: 'resource | datatype | extension',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'StructureDefinition.date',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-date',
    description: 'The structure definition publication date',
  },
  derivation: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.derivation',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation',
    description: 'specialization | constraint - How relates to base definition',
  },
  description: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'StructureDefinition.description',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-description',
    description: 'The description of the structure definition',
  },
  experimental: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.experimental',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental',
    description: 'For testing purposes, not real usage',
  },
  'ext-context': {
    type: 'string',
    fhirtype: 'string',
    xpath: 'StructureDefinition.context',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context',
    description: 'Where the extension can be used in instances',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-identifier',
    description: 'External identifier for the structure definition',
  },
  jurisdiction: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.jurisdiction',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-jurisdiction',
    description: 'Intended jurisdiction for the structure definition',
  },
  keyword: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.keyword',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword',
    description: 'A code for the profile',
  },
  kind: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.kind',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-kind',
    description: 'primitive-type | complex-type | resource | logical',
  },
  name: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'StructureDefinition.name',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-name',
    description: 'Computationally friendly name of the structure definition',
  },
  path: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.snapshot.element.path',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-path',
    description: 'A path that is constrained in the profile',
  },
  publisher: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'StructureDefinition.publisher',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-publisher',
    description: 'Name of the publisher of the structure definition',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.status',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-status',
    description: 'The current status of the structure definition',
  },
  title: {
    type: 'string',
    fhirtype: 'string',
    xpath: 'StructureDefinition.title',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-title',
    description: 'The human-friendly name of the structure definition',
  },
  type: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.type',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-type',
    description: 'Type defined or constrained by this structure',
  },
  url: {
    type: 'uri',
    fhirtype: 'uri',
    xpath: 'StructureDefinition.url',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-url',
    description: 'The uri that identifies the structure definition',
  },
  valueset: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'StructureDefinition.snapshot.element.binding.valueSetUri',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset',
    description: 'A vocabulary binding reference',
  },
  version: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'StructureDefinition.version',
    definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-version',
    description: 'The business version of the structure definition',
  },
};
