const GroupManagement = () => {
  return (
    <div className="relative h-full md:h-[70vh]">
      <img
        src="https://img.freepik.com/premium-photo/business-man-hiold-usepress-infographic-icon-community-technology-digitalconcept-hi-tech-big-data-global-connectioniot-internet-things-ict-information-communication-network_150455-21036.jpg?w=900"
        alt=""
        className="w-full h-[80vh] md:h-[70vh]"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-11/12 max-w-6xl h-full mx-auto flex items-center text-white">
          <div>
            <h1 className="text-xl md:text-2xl font-medium">Group Management Section</h1>
            <div>
              <h2 className="text-lg md:text-xl font-medium py-[2px] md:py-2 ">Group List</h2>
              <ul className="list-decimal pl-6 text-sm md:text-lg">
                <li>
                  Include options to create a new group, edit existing groups,
                  or delete groups
                </li>
                <li>
                  Each group should have a name and possibly a count of contacts
                  within it.
                </li>
                <li>
                  Include options to create a new group, edit existing groups,
                  or delete groups
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-medium py-[2px] md:py-2  ">Create/Edit Group</h2>
              <ol className="list-outside pl-6 text-sm md:text-lg">
                <li>
                  Provide a form or modal window for creating or editing a
                  group.
                </li>
                <li>
                  Allow users to enter a name for the group and optionally
                  assign contacts to it.
                </li>
                <li>Include options to save or cancel the changes.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-medium py-[2px] md:py-2 ">Group Details</h2>
              <ul className="list-disc pl-6 text-sm md:text-lg">
                <li>
                  When a group is selected, display details such as the group
                  name and a list of
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupManagement;
