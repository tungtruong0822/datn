const SENSORS = {
  'sensor-1': {
      name: 'Lối thoát hiểm 2',
      description: 'Cảm biến tại cầu thang',
      groupName: 'Tầng 1',
      location: {
          x: -55.66762924194336, y: 88.7755241394043, z: -16.919677257537842
      },
      objectId:12
  },


  'sensor-2': {
      name: 'Nhà vệ sinh 2',
      description: 'Cảm biến tại nhà vệ sinh 2.',
      groupName: 'Tầng 1',
      location: {
          x: -65.71856307983398,
          y: 86.61837005615234,
          z: -16.919677257537842,
      },
      objectId:12
  },

  'sensor-3': {
      name: 'Phòng tư vấn 2',
      description: 'Cảm biến tại phòng tư vấn 2.',
      groupName: 'Tầng 1',
      location: {
          x: -90.7604751586914, y: 87.13715362548828, z: -16.919677257537842
      },
      objectId: 4109
  },

  'sensor-4': {
      name: 'Lối vào chính',
      description: 'Cảm biến tại lối vào chính.',
      groupName: 'Tầng  1',
      location: {
       x: -105.57610702514648, y: -11.594642639160156, z: -16.919677257537842
      },
      objectId: 5855
  },
  'sensor-5': {
      name: 'Quán cà phê',
      description: 'Cảm biến tại quán cà phê.',
      groupName: 'Tầng  1',
      location: {
          x: -143.30173110961914, y: 87.18759536743164, z: -16.919677257537842
      },
      objectId: 4105
  },
  'sensor-6': {
      name: 'Sảnh',
      description: 'Cảm biến tại sảnh.',
      groupName: 'Tầng  1',
      location: {
          x: -132.45924377441406, y: 10.900766372680664, z: -10.544355034828186
      },
      objectId: 4104
  },
  'sensor-7': {
      name: 'Phòng điều hành',
      description: 'Cảm biến tại phòng điều hành.',
      groupName: 'Tầng  1',
      location: {
          x: -159.2780303955078, y: -1.8119175434112549, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-8': {
      name: 'Phòng thí nghiệm',
      description: 'Cảm biến tại phòng thí nghiệm.',
      groupName: 'Tầng  1',
      location: {
          x: -159.2780303955078, y: -50.4998254776001, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-9': {
      name: 'Phòng tư vấn 1',
      description: 'Cảm biến tại phòng tư vấn 1.',
      groupName: 'Tầng  1',
      location: {
          x: -126.44904327392578, y: -62.24671173095703, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-10': {
      name: 'Nhà vệ sinh 1',
      description: 'Cảm biến tại nhà vệ sinh 1.',
      groupName: 'Tầng  1',
      location: {
          x: -112.73586654663086, y: -66.04428291320801, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-11': {
      name: 'Phòng vật tư y tế',
      description: 'Cảm biến tại Vật tư y tế.',
      groupName: 'Tầng  1',
      location: {
          x: -103.05361557006836, y: -66.04428291320801, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-12': {
      name: 'Phòng thí nghiệm chẩn đoán',
      description: 'Cảm biến tại Phòng thí nghiệm chẩn đoán.',
      groupName: 'Tầng  1',
      location: {
          x: -80.95461654663086, y: -62.41075134277344, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-13': {
      name: 'Phòng thí nghiệm Lưu trữ mẫu',
      description: 'Cảm biến tại Phòng thí nghiệm Lưu trữ mẫu.',
      groupName: 'Tầng  1',
      location: {
          x: -52.953880310058594, y: -62.41075134277344, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-14': {
      name: 'Ngân hàng máu',
      description: 'Cảm biến tại Ngân hàng máu.',
      groupName: 'Tầng  1',
      location: {
          x: -23.426319122314453, y: -62.41075134277344, z: -16.919677257537842
      },
      objectId: 4111
  },
  'sensor-15': {
      name: 'Tiệm thuốc',
      description: 'Cảm biến tại Tiệm thuốc.',
      groupName: 'Tầng  1',
      location: {
          x: 6.101234436035156, y: -62.41075134277344, z: -16.919677257537842
      },
      objectId: 4124
  },
  'sensor-16': {
      name: 'Phòng chờ',
      description: 'Cảm biến tại phòng chờ.',
      groupName: 'Tầng  1',
      location: {
          x: 25.59398651123047, y: -62.41075134277344, z: -16.919677257537842
      },
      objectId: 4132
  },
  'sensor-17': {
      name: 'Lối thoát hiểm 1',
      description: 'Cảm biến tại Lối thoát hiểm 1.',
      groupName: 'Tầng  1',
      location: {
          x: 40.003883361816406, y: -63.63409614562988, z: -16.919677257537842
      },
      objectId: 4111
  },


};

const CHANNELS = {
  'temp': {
      name: 'Nhiệt độ',
      description: 'External temperature in degrees Celsius.',
      type: 'double',
      unit: '°C',
      min: 18.0,
      max: 28.0
  },
  'co2': {
      name: 'CO₂',
      description: 'Level of carbon dioxide.',
      type: 'double',
      unit: 'ppm',
      min: 482.81,
      max: 640.00
  }
};

async function getSensors() {
  return SENSORS;
}

async function getChannels() {
  return CHANNELS;
}

async function getSamples(timerange, resolution = 32) {
  return {
      count: resolution,
      timestamps: generateTimestamps(timerange.start, timerange.end, resolution),
      data: {
          'sensor-1': {
              'temp': generateRandomValues(18.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-2': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-3': {
              'temp': generateRandomValues(24.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(500.0, 620.0, resolution, 5.0)
          },
          'sensor-4': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(600.0, 640.0, resolution, 5.0)
          },
          'sensor-5': {
              'temp': generateRandomValues(18.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-6': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-7': {
              'temp': generateRandomValues(24.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(500.0, 620.0, resolution, 5.0)
          },
          'sensor-8': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(600.0, 640.0, resolution, 5.0)
          },
          'sensor-9': {
              'temp': generateRandomValues(18.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-10': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-11': {
              'temp': generateRandomValues(24.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(500.0, 620.0, resolution, 5.0)
          },
          'sensor-12': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(600.0, 640.0, resolution, 5.0)
          },
          'sensor-13': {
              'temp': generateRandomValues(18.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-14': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(540.0, 600.0, resolution, 5.0)
          },
          'sensor-15': {
              'temp': generateRandomValues(24.0, 28.0, resolution, 1.0),
              'co2': generateRandomValues(500.0, 620.0, resolution, 5.0)
          },
          'sensor-16': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(600.0, 640.0, resolution, 5.0)
          },
          'sensor-17': {
              'temp': generateRandomValues(20.0, 24.0, resolution, 1.0),
              'co2': generateRandomValues(600.0, 640.0, resolution, 5.0)
          },

      }
  };
}

function generateTimestamps(start, end, count) {
  const delta = Math.floor((end.getTime() - start.getTime()) / (count - 1));
  const timestamps = [];
  for (let i = 0; i < count; i++) {
      timestamps.push(new Date(start.getTime() + i * delta));
  }
  return timestamps;
}

function generateRandomValues(min, max, count, maxDelta) {
  const values = [];
  let lastValue = min + Math.random() * (max - min);
  for (let i = 0; i < count; i++) {
      values.push(lastValue);
      lastValue += (Math.random() - 0.5) * 2.0 * maxDelta;
      if (lastValue > max) {
          lastValue = max;
      }
      if (lastValue < min) {
          lastValue = min;
      }
  }
  return values;
}

module.exports = {
  getSensors,
  getChannels,
  getSamples
};
