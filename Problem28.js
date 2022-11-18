let async = { getAll: function ( urlArray, callback){ /* … */ } };
/* 
Usage: async.getAll([axCall1,axCall2], callback);
Expected context of callback:
   {
     1: <result of first function>,
     2: <result of second function>
   }
*/
