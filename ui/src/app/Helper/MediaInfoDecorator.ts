import 'reflect-metadata';


export const formatMetadataKey = Symbol('mediaInfoSrcName');

export function MediaInfoKey(mediaInfoSrcName: string) {
  return Reflect.metadata(formatMetadataKey, mediaInfoSrcName);
}

export function GetMediaInfoKey(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
