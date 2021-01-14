//main methods (CRUD) + db connection, imports stuff from models.ts
import { createConnection } from 'typeorm';

const dbConnect = async () => {
  await createConnection()
  .then(()=> console.log('DB connected successfully'))
  .catch(err => console.log(err));
};

export default dbConnect;