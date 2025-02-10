export interface AdvertisementFormProps {
  onSubmit: (ad: Advertisement) => void;
  onClose?: () => void;
  onCancel?: () => void;
  initialData?: Advertisement;
}

export interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
  photoNumber: number;
}

export interface AdvertisementListProps {
  advertisements: Advertisement[];
  onDelete: (id: string) => void;
  onEdit: (ad: Advertisement) => void;
}

export interface ModalPanelProps {
  onSubmit: (ad: Advertisement) => void;
  editingAd?: Advertisement;
  onCloseEditing?: () => void;
}

export interface HandleSubmitParams {
  e: React.FormEvent;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
  photoNumber: number;
  initialData: Advertisement | undefined;
  onSubmit: AdvertisementFormProps["onSubmit"];
  onClose?: AdvertisementFormProps["onClose"];
  setNameError?: (error: string) => void;
}
export interface CloseButtonProps {
  isMobile: boolean;
  onClose?: () => void;
}

export interface PhotoNumberSelectorProps {
  photoNumber: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormButtonsProps {
  isMediumDevice: boolean;
  actionText: string;
  actionFullText: string;
  isFormFilled: boolean | string;
  clearText: string;
  cancelText: string;
  handleReset: () => void;
  initialData?: Advertisement;
  onCancel?: () => void;
}

export interface DateFieldsProps {
  startDate: string;
  endDate: string;
  today: string;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
}
