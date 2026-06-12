import type { Schema, Struct } from '@strapi/strapi';

export interface AmaAmaAnswer extends Struct.ComponentSchema {
  collectionName: 'components_ama_ama_answers';
  info: {
    displayName: 'AMAAnswer';
    icon: 'bell';
  };
  attributes: {
    Content: Schema.Attribute.String;
    CreationDate: Schema.Attribute.Date;
    InitialComponent: Schema.Attribute.Component<'ama.ama-question', true>;
    Respondent: Schema.Attribute.Component<'ama.ama-user', true>;
  };
}

export interface AmaAmaQuestion extends Struct.ComponentSchema {
  collectionName: 'components_ama_ama_questions';
  info: {
    displayName: 'AMAQuestion';
    icon: 'filePdf';
  };
  attributes: {
    Asker: Schema.Attribute.Component<'ama.ama-user', false>;
    Content: Schema.Attribute.String;
    CreationDate: Schema.Attribute.Date;
    isAnonymous: Schema.Attribute.Boolean;
    Respondent: Schema.Attribute.Component<'ama.ama-user', true>;
  };
}

export interface AmaAmaUser extends Struct.ComponentSchema {
  collectionName: 'components_ama_ama_users';
  info: {
    displayName: 'AMAUser';
    icon: 'crown';
  };
  attributes: {
    FirstName: Schema.Attribute.String;
    LastName: Schema.Attribute.String;
    ProfilePhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

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
      'ama.ama-answer': AmaAmaAnswer;
      'ama.ama-question': AmaAmaQuestion;
      'ama.ama-user': AmaAmaUser;
      'polls.poll-option': PollsPollOption;
    }
  }
}
