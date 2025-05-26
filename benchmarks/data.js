window.BENCHMARK_DATA = {
  "lastUpdate": 1748280796193,
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
      }
    ]
  }
}