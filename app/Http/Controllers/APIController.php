<?php


namespace REBELinBLUE\Deployer\Http\Controllers;

use REBELinBLUE\Deployer\Contracts\Repositories\ProjectRepositoryInterface;

/**
 * The dashboard controller.
 */
class APIController extends Controller
{
    public function projects(ProjectRepositoryInterface $projectRepository)
    {
        return $projectRepository->getAll();
    }

    public function groups(GroupRepositoryInterface $groupRepository)
    {
        return $groupRepository->getAll();
    }
}
