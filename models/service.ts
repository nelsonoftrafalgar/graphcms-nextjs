interface IPickerItemIcon {
  id: string
  name: string
  iconAlt: string
  icon: {
    url: string
  }
  iconWidth: number
  iconHeight: number
}

export interface IPickerItem {
  id: string
  title: string
  content: string
  buttonText: string
  pickerItemIcons: IPickerItemIcon[]
}

export interface IServiceItem {
  id: string
  content: string
  icon: { url: string }
  iconAlt: string
  iconWidth: number
  iconHeight: number
}
