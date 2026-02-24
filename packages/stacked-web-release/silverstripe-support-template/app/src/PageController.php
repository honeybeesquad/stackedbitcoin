<?php

namespace {

    use SilverStripe\CMS\Controllers\ContentController;
    use SilverStripe\CMS\Model\SiteTree;
    use SilverStripe\Model\List\ArrayList;

    /**
     * @template T of Page
     * @extends ContentController<T>
     */
    class PageController extends ContentController
    {
        /**
         * An array of actions that can be accessed via a request. Each array element should be an action name, and the
         * permissions or conditions required to allow the user to access it.
         *
         * <code>
         * [
         *     'action', // anyone can access this action
         *     'action' => true, // same as above
         *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
         *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
         * ];
         * </code>
         *
         * @var array
         */
        private static $allowed_actions = [];

        protected function init()
        {
            parent::init();
            // You can include any CSS or JS required by your project here.
            // See: https://docs.silverstripe.org/en/developer_guides/templates/requirements/
        }

        public function HomeLinks(): ArrayList
        {
            $links = ArrayList::create();
            $helpRoot = $this->getHelpRootPage();
            if ($helpRoot && $helpRoot->exists()) {
                $links->push($helpRoot);
            }

            $newsRoot = SiteTree::get()
                ->filter('ClassName', 'SilverStripe\\Blog\\Model\\Blog')
                ->first();
            if ($newsRoot && $newsRoot->exists()) {
                $links->push($newsRoot);
            }

            return $links;
        }

        public function LearnLinks(): ArrayList
        {
            return $this->buildSectionLinks('learn');
        }

        public function SupportLinks(): ArrayList
        {
            return $this->buildSectionLinks('support');
        }

        private function buildSectionLinks(string $urlSegment): ArrayList
        {
            $links = ArrayList::create();
            $helpRoot = $this->getHelpRootPage();
            if (!$helpRoot || !$helpRoot->exists()) {
                return $links;
            }

            $section = $helpRoot
                ->Children()
                ->filter('URLSegment', $urlSegment)
                ->first();

            if (!$section || !$section->exists()) {
                return $links;
            }

            $links->push($section);
            foreach ($section->Children()->filter('ShowInMenus', 1)->sort('Sort', 'ASC') as $child) {
                $links->push($child);
            }

            return $links;
        }

        private function getHelpRootPage(): ?SiteTree
        {
            return SiteTree::get()
                ->filter([
                    'URLSegment' => 'help',
                    'ParentID' => 0,
                ])
                ->first();
        }
    }
}
