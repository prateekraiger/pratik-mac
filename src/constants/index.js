export * from './nav';
export * from './dock';
export * from './blog';
export * from './tech';
export * from './socials';
export * from './photos';
export * from './projects';
export * from './locations';
export * from './config';

import { WORK_LOCATION } from './projects';
import { ABOUT_LOCATION, RESUME_LOCATION, TRASH_LOCATION } from './locations';

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
