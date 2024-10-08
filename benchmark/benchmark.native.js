/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench-harness' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var tryRequire = require( '@stdlib/utils-try-require' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var isIntegerf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isIntegerf instanceof Error )
};


// MAIN //

bench( pkg+'::native,true', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		1.0e38,
		10,
		-0,
		-1,
		-2,
		-3,
		-4,
		-5,
		-6,
		-7,
		-8,
		-9,
		-10,
		-1.0e38
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isIntegerf( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) && bool !== true ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::native,false', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		0.1,
		1.1,
		2.1,
		3.1,
		4.1,
		5.1,
		6.1,
		7.1,
		8.1,
		9.1,
		10.1,
		-0.1,
		-1.1,
		-2.1,
		-3.1,
		-4.1,
		-5.1,
		-6.1,
		-7.1,
		-8.1,
		-9.1,
		-10.1
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isIntegerf( values[ i % values.length ] );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) && bool !== false ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
