"use client";

export default function handler(req, res) {
  const users = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
  res.status(200).json(users);
}
