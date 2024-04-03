   try {
     const basename = path.basename('path/to/file.js');
     console.log(basename); // 'file.js'
   } catch (error) {
     console.error('An error occurred:', error.message);
   }
   