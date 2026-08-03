import Content from '../models/Content.js';

export const getContent = async (req, res) => {
  try {
    const { section } = req.params;
    const content = await Content.findOne({ section });

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.status(200).json(content.data);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateContent = async (req, res) => {
  try {
    const { section } = req.params;
    const data = req.body;

    if (!data) {
      return res.status(400).json({ message: 'Content data is required' });
    }

    const content = await Content.findOneAndUpdate(
      { section },
      { data },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Content updated successfully', content: content.data });
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
