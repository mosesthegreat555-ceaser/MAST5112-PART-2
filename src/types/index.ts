export type Course = 'Starter' | 'Main' | 'Dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
}

export interface MenuPackage {
  id: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  description: string;
}

export type UserRole = 'chef' | 'guest';

export type RootStackParamList = {
  Splash: undefined;
  RoleSelect: undefined;
  ChefHome: undefined;
  AddMenuItem: { itemId?: string } | undefined;
  MenuItems: undefined;
  ManageMenu: undefined;
  ChefSettings: undefined;
  GuestHome: undefined;
  BrowseMenus: undefined;
  ViewDishes: undefined;
  FilterCourses: undefined;
  GuestSettings: undefined;
};
