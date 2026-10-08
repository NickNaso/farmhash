// Copyright 2014 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

const { renameSync, rmSync } = require('node:fs');
const platform = require('../platform');

renameSync('build/.marmotta/farmhash.node', `build/farmhash-${platform}.node`);
rmSync('build/.marmotta', { recursive: true });
