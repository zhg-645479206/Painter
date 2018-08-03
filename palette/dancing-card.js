export default class SunningJuly {
  context = {}
  constructor(context) {
    this.context = context;
  }
  palette() {
    const that = this.context;
    return {
      width: '700rpx',
      height: '1400rpx',
      background: '#eee',
      views: [{
        type: 'qrcode',
        content: 'https://github.com/Kujiale-Mobile/Painter',
        css: {
          top: '40rpx',
          left: '180rpx',
          color: 'red',
          borderWidth: '10rpx',
          borderColor: 'blue',
          width: '120rpx',
          height: '120rpx',
        },
        methods: {
          tap() {
            console.log('qrcode');
          },
        },
      },
      {
        type: 'rect',
        css: {
          top: '40rpx',
          left: '180rpx',
          color: 'green',
          borderRadius: '20rpx',
          borderWidth: '10rpx',
          width: '120rpx',
          height: '120rpx',
        },
        methods: {
          tap() {
            console.log('rect');
          },
        },
      },
      {
        type: 'text',
        text: 'borderWidth',
        css: {
          top: '40rpx',
          left: '180rpx',
          color: 'green',
          borderWidth: '2rpx',
          fontSize: '40rpx',
        },
        methods: {
          tap() {
            console.log('text');
          },
        },
      },
      ],
      methods: {
        tap(e) {
          console.log('background tap');
        },
      },
    };
  }
}
