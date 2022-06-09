import formidable from 'formidable';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function image(req, res) {
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    uploadDir:
      process.env.NODE_ENV === 'development'
        ? path.join(__dirname, '..', '..', '..', '..', 'public', 'uploads')
        : path.join(__dirname, '..', 'public', 'uploads'),
  });
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
}
