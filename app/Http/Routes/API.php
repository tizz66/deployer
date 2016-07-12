<?php

// Dashboard
Route::group([
    'middleware' => ['web', 'auth', 'jwt'],
], function () {
    Route::get('api/projects', 'APIController@projects');
    Route::get('api/groups', 'APIController@groups');

    Route::get('api/projects/{id}', [
        'as'   => 'projects',
        'uses' => 'DeploymentController@project',
    ]);
});
