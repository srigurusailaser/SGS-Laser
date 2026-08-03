const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  res.status(200).json({
    message: 'Image uploaded successfully',
    url: req.file.path,
    public_id: req.file.filename
  });
};

export { uploadImage };
