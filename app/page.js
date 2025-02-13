'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Card, CardContent } from '../components/Card';
import { Pencil, Trash, Save } from 'lucide-react';

export default function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', isEditing: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isEditing: false },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', isEditing: false },
  ]);

  const stats = [
    { label: 'Total Users', value: users.length },
    { label: 'Active Users', value: users.length - 1 },
    { label: 'New Signups', value: 1 },
  ];

  const handleEdit = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, isEditing: !user.isEditing } : user));
  };

  const handleSave = (id, newName, newEmail) => {
    setUsers(users.map(user => user.id === id ? { ...user, name: newName, email: newEmail, isEditing: false } : user));
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1 bg-blue-500 text-white p-6 rounded-xl shadow-md w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold">{stat.label}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">
                    {user.isEditing ? (
                      <input
                        type="text"
                        className="border p-1 w-full"
                        defaultValue={user.name}
                        onChange={(e) => user.name = e.target.value}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="p-2">
                    {user.isEditing ? (
                      <input
                        type="email"
                        className="border p-1 w-full"
                        defaultValue={user.email}
                        onChange={(e) => user.email = e.target.value}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="p-2 flex gap-2">
                    {user.isEditing ? (
                      <Button onClick={() => handleSave(user.id, user.name, user.email)}>
                        <Save size={16} /> Save
                      </Button>
                    ) : (
                      <Button onClick={() => handleEdit(user.id)}>
                        <Pencil size={16} /> Edit
                      </Button>
                    )}
                    <Button variant="destructive" onClick={() => handleDelete(user.id)}>
                      <Trash size={16} /> Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
