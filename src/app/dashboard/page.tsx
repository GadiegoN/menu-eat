"use client";

import { useState } from "react";
import { createMenu as createMenuService } from "../../services/firebase-config";

export default function Dashboard() {
  const [menuName, setMenuName] = useState("");
  const [menus, setMenus] = useState<string[]>([]);

  const createMenu = async () => {
    const newMenuId = await createMenuService(menuName);
    if (newMenuId) {
      setMenus([...menus, menuName]);
      setMenuName("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="mt-6">
        <input
          type="text"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          placeholder="Nome do Cardápio"
          className="p-2 border rounded"
        />
        <button
          onClick={createMenu}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Criar Cardápio
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl">Meus Cardápios</h2>
        <ul>
          {menus.map((menu, index) => (
            <li key={index} className="mt-2">
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
