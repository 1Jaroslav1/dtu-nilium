/** SAMPLE DATA ONLY: the patient's study enrolment, until the study backend exists. */
export type StudyEnrolment = {
  studyName: string;
  participantCode: string;
  nightsRecorded: number;
  nightsTotal: number;
  endsOn: string;
  missedNights: { date: string; reason: string }[];
  sharedWithTeam: string[];
};

export function getStudyEnrolment(): StudyEnrolment {
  return {
    studyName: '[Study name]',
    participantCode: 'P-014',
    nightsRecorded: 18,
    nightsTotal: 28,
    endsOn: '1 December',
    missedNights: [{ date: '12 Nov', reason: 'the counter was unplugged' }],
    sharedWithTeam: [
      'Coughs per hour, each night',
      'When you fell asleep and woke up',
      'Bedroom temperature and humidity',
    ],
  };
}
