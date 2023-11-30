import { connect } from 'mongoose';

// conexion remota a base de datos
const dbConnect = () => {
  // conexion a la base de datos
  const DB_URI = process.env.DB_URI; // pidiendo la URI de la base de datos
  connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export default dbConnect;
