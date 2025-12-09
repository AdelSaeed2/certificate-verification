import certificates from '../certificates.json' assert { type: "json" };

export default function handler(req, res) {
  const { id } = req.query;

  const cert = certificates.find(c => c.id === id);

  if (cert) {
    res.status(200).json({
      valid: true,
      certificate: cert
    });
  } else {
    res.status(404).json({
      valid: false,
      message: "Certificate not found"
    });
  }
}
