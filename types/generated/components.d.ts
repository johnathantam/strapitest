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
    IsAnonymous: Schema.Attribute.Boolean;
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
    displayName: 'RadioCardPollOption';
  };
  attributes: {
    PollOptionDescription: Schema.Attribute.String;
    PollOptionTitle: Schema.Attribute.String;
  };
}

export interface PollsRadioCardPollResponse extends Struct.ComponentSchema {
  collectionName: 'components_polls_radio_card_poll_responses';
  info: {
    displayName: 'RadioCardPollResponse';
    icon: 'bulletList';
  };
  attributes: {
    correspondingRadioCardPollId: Schema.Attribute.String;
    pollChoiceTitle: Schema.Attribute.String;
  };
}

export interface PollsSliderPollOption extends Struct.ComponentSchema {
  collectionName: 'components_polls_slider_poll_options';
  info: {
    displayName: 'SliderPollOption';
    icon: 'bulletList';
  };
  attributes: {
    maxSliderValue: Schema.Attribute.Integer;
    minSliderValue: Schema.Attribute.Integer;
  };
}

export interface PollsSliderPollResponse extends Struct.ComponentSchema {
  collectionName: 'components_polls_slider_poll_responses';
  info: {
    displayName: 'SliderPollResponse';
  };
  attributes: {
    correspondingSliderPollId: Schema.Attribute.String;
    sliderPollResponse: Schema.Attribute.Integer;
  };
}

export interface PollsSurveyPollOption extends Struct.ComponentSchema {
  collectionName: 'components_polls_survey_poll_options';
  info: {
    displayName: 'SurveyPollOption';
    icon: 'archive';
  };
  attributes: {
    SurveyOptionQuestion: Schema.Attribute.String;
    SurveyOptionQuestionDescription: Schema.Attribute.Text;
  };
}

export interface PollsSurveyPollResponse extends Struct.ComponentSchema {
  collectionName: 'components_polls_survey_poll_responses';
  info: {
    displayName: 'SurveyPollResponse';
    icon: 'bulletList';
  };
  attributes: {
    correspondingSurveyPollId: Schema.Attribute.String;
    SurveyPollResponse: Schema.Attribute.Component<
      'polls.survey-poll-option',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ama.ama-answer': AmaAmaAnswer;
      'ama.ama-question': AmaAmaQuestion;
      'ama.ama-user': AmaAmaUser;
      'polls.poll-option': PollsPollOption;
      'polls.radio-card-poll-response': PollsRadioCardPollResponse;
      'polls.slider-poll-option': PollsSliderPollOption;
      'polls.slider-poll-response': PollsSliderPollResponse;
      'polls.survey-poll-option': PollsSurveyPollOption;
      'polls.survey-poll-response': PollsSurveyPollResponse;
    }
  }
}
