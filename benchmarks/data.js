window.BENCHMARK_DATA = {
  "lastUpdate": 1748281000202,
  "repoUrl": "https://github.com/CarlWachter/kernel",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "committer": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "distinct": true,
          "id": "32577e9d818c9467a4d5db007ff3d9794a3abfdc",
          "message": "feat(bench): Parallel execution of benchmarks",
          "timestamp": "2025-05-26T19:27:02+02:00",
          "tree_id": "862d853936fd945a7eff3d4eb607e3b35d627f74",
          "url": "https://github.com/CarlWachter/kernel/commit/32577e9d818c9467a4d5db007ff3d9794a3abfdc"
        },
        "date": 1748280793649,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 208.656758883,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.30440245796000004,
            "unit": "s",
            "range": 0.01386164259245039,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.33580187664,
            "unit": "s",
            "range": 0.014580980389453584,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.3930006688399999,
            "unit": "s",
            "range": 0.02394169859835795,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 Threads",
            "value": 95.38133598305683,
            "unit": "%",
            "range": 5.478492854074816,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 45.18816878342419,
            "unit": "%",
            "range": 0.7263224379518908,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.73101236481598,
            "unit": "%",
            "range": 0.13268410658252786,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "Pi Multithreaded Benchmark",
            "value": 4.208274841308594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "General Benchmark File Size"
          },
          {
            "name": "Startup Benchmark",
            "value": 4.123626708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "General Benchmark File Size"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "committer": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "distinct": true,
          "id": "32577e9d818c9467a4d5db007ff3d9794a3abfdc",
          "message": "feat(bench): Parallel execution of benchmarks",
          "timestamp": "2025-05-26T19:27:02+02:00",
          "tree_id": "862d853936fd945a7eff3d4eb607e3b35d627f74",
          "url": "https://github.com/CarlWachter/kernel/commit/32577e9d818c9467a4d5db007ff3d9794a3abfdc"
        },
        "date": 1748280997648,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "alloc_benchmarks",
            "value": 4.189750671386719,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.213157653808594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.216026306152344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 82.37393325000001,
            "unit": "ticks",
            "range": 0.21745863638997653,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 42.91555025,
            "unit": "ticks",
            "range": 2.8669978592685346,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 26.523315550000003,
            "unit": "ticks",
            "range": 0.2476031183653538,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 96398.42242571338,
            "unit": "MByte/s",
            "range": 67097.18366769924,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 94841.14375372516,
            "unit": "MByte/s",
            "range": 69391.6954117396,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 94099.65635200299,
            "unit": "MByte/s",
            "range": 70471.67609641793,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 95098.16018795114,
            "unit": "MByte/s",
            "range": 66272.27145394837,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 96738.98417860245,
            "unit": "MByte/s",
            "range": 70708.1557712307,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 96365.48936342112,
            "unit": "MByte/s",
            "range": 72008.69259977422,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 83090.99996828812,
            "unit": "MByte/s",
            "range": 56717.53521073474,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 96208.04175106948,
            "unit": "MByte/s",
            "range": 70110.0230796803,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 93796.56709373271,
            "unit": "MByte/s",
            "range": 70157.90855364209,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 82810.33468762285,
            "unit": "MByte/s",
            "range": 56523.223839762984,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 98058.57284868792,
            "unit": "MByte/s",
            "range": 71401.25311039368,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 96067.83678845575,
            "unit": "MByte/s",
            "range": 71711.70306663567,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "Allocation success",
            "value": 99.99999999999997,
            "unit": "%",
            "range": 2.842170943040401e-14,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 69.99901869886399,
            "unit": "%",
            "range": 0.19250021132399053,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 99.99999999999997,
            "unit": "%",
            "range": 2.842170943040401e-14,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 8721.27274813702,
            "unit": "Ticks",
            "range": 148.66672541910467,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 8721.27274813702,
            "unit": "Ticks",
            "range": 148.66672541910467,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 678.4126812679725,
            "unit": "Ticks",
            "range": 9.777475457487718,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 5,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 39.824999999999996,
            "unit": "ns",
            "range": 2.5088593025516603,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          }
        ]
      }
    ]
  }
}