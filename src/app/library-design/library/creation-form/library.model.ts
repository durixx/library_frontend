import {Rack} from '../../rack/rack-creation-form/rack.model';

export class Library {

  id: number;
  nameOfLibrary: string;
  address: string;
  city: string;
  country: string;
  rackList: Rack[];


  constructor() {
  }

}
