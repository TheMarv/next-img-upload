import formidable from 'formidable';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function image(req, res) {
  console.log(process.cwd());
  const form = new formidable.IncomingForm({
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    uploadDir: path.join(process.cwd(), 'public', 'uploads'),
  });
  form.parse(req, (err, fields, files) => {});
}
