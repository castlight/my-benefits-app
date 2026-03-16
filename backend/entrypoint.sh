#!/bin/bash

# Continuous compilation: Gradle watches for source changes and recompiles automatically
./gradlew classes --continuous --no-daemon -q &

# Run the app with devtools (auto-restarts when classes change)
exec ./gradlew bootRun --no-daemon \
  -Dspring-boot.run.jvmArguments="-Dspring.devtools.restart.poll-interval=2000 -Dspring.devtools.restart.quiet-period=1000"
