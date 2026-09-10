import React, { createContext, useContext, useMemo, useState } from 'react';
import { MenuItem } from '../types';
import { initialMenuItems } from '../data/mockData';

interface MenuContextValue {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Omit<MenuItem, 'id'>) => void;
  deleteMenuItem: (id: string) => void;
  getMenuItem: (id: string) => MenuItem | undefined;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    setMenuItems((prev) => [...prev, { ...item, id: Date.now().toString() }]);
  };

  const updateMenuItem = (id: string, item: Omit<MenuItem, 'id'>) => {
    setMenuItems((prev) => prev.map((m) => (m.id === id ? { ...item, id } : m)));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((m) => m.id !== id));
  };

  const getMenuItem = (id: string) => menuItems.find((m) => m.id === id);

  const value = useMemo(
    () => ({ menuItems, addMenuItem, updateMenuItem, deleteMenuItem, getMenuItem }),
    [menuItems]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export function useMenu(): MenuContextValue {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used within a MenuProvider');
  return ctx;
}
