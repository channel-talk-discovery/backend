import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'src/uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export { upload };