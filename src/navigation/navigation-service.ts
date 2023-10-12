import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function getRootState() {
  return navigationRef.current?.getRootState();
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}
