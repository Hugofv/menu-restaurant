import { MenuModel } from '~/models/menu'

export enum MenuActionType {}

export interface MenuAction {
  type: MenuActionType
  payload: unknown
}

export interface MenuState {
  menu: MenuModel
}
