import { IPermission } from '../interface';

export const TRAINEES: string = 'trainees';
export const TRAINEE: string = 'trainee';
export const USER: string = 'user';
export const TRAINER: string = 'trainer';
export const HEAD_TRAINER: string = 'head-trainer';
export const REVIEWERS: string = 'reviewers';
export const REVIEWER: string = 'reviewer';
export const FEEDBACK: string = 'feedback';
export const BCRYPT_SALT_ROUNDS: number = 8;

export const permissions: any = {
  [TRAINEES]: {
    read: [TRAINEE, TRAINER, HEAD_TRAINER, REVIEWER],
    write: [TRAINER, HEAD_TRAINER],
    delete: [HEAD_TRAINER],
  },
  [USER]: {
    read: [TRAINEE, TRAINER, HEAD_TRAINER, REVIEWER],
    write: [TRAINER, HEAD_TRAINER],
    delete: [HEAD_TRAINER],
  },
  [FEEDBACK]: {
    read: [TRAINEE, TRAINER, HEAD_TRAINER, REVIEWER],
    write: [REVIEWER],
    delete: [REVIEWER],
  },
};
