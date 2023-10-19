exports.checkInput = (req, res) => {
    const { value } = req.body;

    if (value === '1') {
        res.status(200).json({ message: 'Success! Input is 1' });
    } else {
        res.status(400).json({ error: 'Error: Input is not 1' });
    }
}