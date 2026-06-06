import type { Schema, Struct } from '@strapi/strapi';

export interface PollsPollOption extends Struct.ComponentSchema {
  collectionName: 'components_polls_poll_options';
  info: {
    displayName: 'PollOption';
  };
  attributes: {
    PollOptionDescription: Schema.Attribute.String;
    PollOptionTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'polls.poll-option': PollsPollOption;
    }
  }
}
