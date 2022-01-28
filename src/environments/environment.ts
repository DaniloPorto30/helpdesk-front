// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  addtURL : 'http://localhost:8081/tec/addTecnico',
  gettURL : 'http://localhost:8081/tec/getAll',
  updattUrl : 'http://localhost:8081/tec/updateTecnico',
  delettUrl : 'http://localhost:8081/tec/deleteTecnicoById',

  addcURL : 'http://localhost:8081/cli/addCliente',
  getcURL : 'http://localhost:8081/cli/getAll',
   updatecUrl : 'http://localhost:8081/cli/updateCliente',
   deletecUrl : 'http://localhost:8081/cli/deleteClienteById',

   addchURL : 'http://localhost:8081/cha/addChamado',
   getchURL : 'http://localhost:8081/cha/getAll',
   updatechUrl : 'http://localhost:8081/cha/updateChamado',
   deletechUrl : 'http://localhost:8081/cha/deleteChamadoById',

   getlURL:  'http://localhost:8081/log/getAll',
   addlURL : 'http://localhost:8081/log/addLogin',

  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
