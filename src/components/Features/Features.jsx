function Features() {
  return (
      <section className="text-white bg-gradient-to-r from-[#4C9DE9] via-[#0A1219] to-[#4C9DE9]">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="lg:w-1/2 xl:w-3/5 ">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?t=st=1713544020~exp=1713547620~hmac=ab38b7064f32e7fce5a1e0e9403889a5f9cf85cd8e9af33378c64508b5bf22eb&w=900"
                alt=""
                className="rounded-lg shadow-lg  aspect-video sm:min-h-96"
              />
            </div>
          </div>
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
            <div className="flex space-x-2 sm:space-x-4">
              <img
                src="https://www.cloudally.com/wp-content/uploads/2019/12/restore-o365-groups-main-1024x602.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Group Deletion and Restoration
                </p>
                <p className="leading-snug">
                  Allow users to delete unwanted contact groups while providing
                  a safety net for accidental deletions. Deleted groups are
                  moved to a temporary archive where they can be restored if
                  needed, preventing data loss and providing users with peace of
                  mind.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeWEwNuZwhTizVpSa4LaQVCQKUpvafAqVww&s"
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Group Sharing and Collaboration
                </p>
                <p className="leading-snug">
                  Facilitate collaboration by enabling users to share contact
                  groups with colleagues, friends, or family members. Shared
                  groups allow multiple users to access and manage the same set
                  of contacts, enhancing teamwork and coordination.
                </p>
              </div>
            </div>

            <div className="flex space-x-2 sm:space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMkan770wR1L2Y2dTplPuwVhaA8tkdg3vhDwa-QLsiOSE2iOdhOswTdwp-IyfvzCFgIc&usqp=CAU"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Group Notifications and Reminders
                </p>
                <p className="leading-snug">
                  Keep users informed about important updates or events related
                  to their contact groups through notifications and reminders.
                  Notifications can alert users to changes in group membership
                  or upcoming group activities, helping them stay organized and
                  up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Features;
