import multer, { FileFilterCallback } from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { Request, Response, NextFunction } from 'express';
import cloudinary from '../utils/cloudinary'; 

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: Request, file: Express.Multer.File) => ({
    folder: 'test_uploads',
    format: file.mimetype.split('/')[1],
    allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  }),
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
});

export const uploadImages = (req: Request, res: Response, next: NextFunction): void => {
  const uploadHandler = upload.array('images', 5);

  uploadHandler(req, res, (err: any) => {
    if (err instanceof multer.MulterError) {
      res.status(400).json({ success: false, message: `Multer Error: ${err.message}` });
    } else if (err) {
      res.status(400).json({ success: false, message: err.message });
    } else {
      next();
    }
  });
};

export default upload;
