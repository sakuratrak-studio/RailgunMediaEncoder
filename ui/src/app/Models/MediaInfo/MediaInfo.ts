import {VideoInfo} from './VideoInfo';
import {AudioInfo} from './AudioInfo';
import {MediaInfoKey} from '../../Helper/MediaInfoDecorator';

export class MediaInfo {
  public raw: string;

  @MediaInfoKey('Format')
  public format: string;
  @MediaInfoKey('Format/Info')
  public formatInfo: string;
  @MediaInfoKey('File size')
  public fileSize: string;
  @MediaInfoKey('Duration')
  public duration: string;
  @MediaInfoKey('Overall bit rate')
  public overallBitRate: string;
  @MediaInfoKey('Writing application')
  public writingApplication: string;
  @MediaInfoKey('Tagging application')
  public taggingApplication: string;

  public videos: VideoInfo[];
  public audios: AudioInfo[];
}


/*
* General
Complete name                            : D:\下载\樱花庄的宠物女孩：第1话.flv
Format                                   : Flash Video
File size                                : 1.05 GiB
Duration                                 : 23 min 40 s
Overall bit rate                         : 6 327 kb/s
Writing application                      : Codec by Bilibili XCode Worker v4.4.24(fixed_gap:False)
Tagging application                      : Yet Another Metadata Injector for FLV - Version 1.9

Video
Format                                   : AVC
Format/Info                              : Advanced Video Codec
Format profile                           : Main@L4.1
Format settings                          : CABAC / 3 Ref Frames
Format settings, CABAC                   : Yes
Format settings, Reference frames        : 3 frames
Codec ID                                 : 7
Duration                                 : 23 min 40 s
Bit rate                                 : 5 860 kb/s
Width                                    : 1 920 pixels
Height                                   : 1 080 pixels
Display aspect ratio                     : 16:9
Frame rate mode                          : Constant
Frame rate                               : 23.976 (23976/1000) FPS
Original frame rate                      : 23.976 (24000/1001) FPS
Standard                                 : NTSC
Color space                              : YUV
Chroma subsampling                       : 4:2:0
Bit depth                                : 8 bits
Scan type                                : Progressive
Bits/(Pixel*Frame)                       : 0.118
Stream size                              : 1 017 MiB (95%)
Color range                              : Limited
Color primaries                          : BT.709
Transfer characteristics                 : BT.709
Matrix coefficients                      : BT.709

Audio
Format                                   : AAC LC
Format/Info                              : Advanced Audio Codec Low Complexity
Codec ID                                 : 10-2
Duration                                 : 23 min 40 s
Bit rate                                 : 311 kb/s
Channel(s)                               : 2 channels
Channel layout                           : L R
Sampling rate                            : 48.0 kHz
Frame rate                               : 46.875 FPS (1024 SPF)
Compression mode                         : Lossy
Delay relative to video                  : 42 ms
Stream size                              : 54.6 MiB (5%)
* */
