'use strict';

/**
 * DNF 日本語化インストールスクリプト
 */

(function() {
    var dist_files,
        popup_return,
        pwd,
        wsapp = WScript.CreateObject('Shell.Application'),
        wsfs = WScript.CreateObject('Scripting.FileSystemObject'),
        wssh = WScript.CreateObject('WScript.Shell'),
        os_ver = wsfs.GetFileVersion(
            wsfs.BuildPath(wsfs.GetSpecialfolder(1).Path, 'kernel32.dll')
        );

    function stop(message) {
        wssh.Popup(message, 0, 'Abort process', 0 + 16);
        WScript.Quit();
    }

    function getDistPath() {
        var path = pwd + '\\dist';

        if (wsfs.FolderExists(path)) {
            return path;
        }
        else {
            stop('Can\'t find "dist" folder');
        }
    }

    function getDNFPath() {
        var dnf = '\\Steam\\steamapps\\common\\duke nukem forever\\System\\',
            path = wssh.ExpandEnvironmentStrings('%PROGRAMFILES%') + dnf,
            path_x86 = wssh.ExpandEnvironmentStrings('%PROGRAMFILES(X86)%') +
                dnf; 

        if (wsfs.FolderExists(path_x86)) {
            return path_x86;
        }
        else if (wsfs.FolderExists(path)) {
            return path;
        }
        else {
            stop('Can\'t find Duke Nukem Forever');
        }
    }

    // UAC tricks for Windows Vista or later

    if (parseInt(os_ver) >= 6 && WScript.Arguments.length === 0) {
        wsapp.ShellExecute(
            'wscript.exe',
            '"' + WScript.ScriptFullName + '"' + ' "' +
                wssh.CurrentDirectory + '"',
            '',
            'runas',
            1
        ); 
        WScript.Quit(0);
    }

    if (WScript.Arguments.length === 1) {
        pwd = WScript.Arguments(0);
    }
    else {
        pwd = wssh.CurrentDirectory;
    }

    // Start script

    popup_return = wssh.Popup(
        'This script trys to find Duke Nukem Forever and replace English subtitle files to Japanese one. THIS SCRIPT DO NOT BACKUP ANYTHING!',
        0,
        'Override files',
        1 + 48
    );

    if (popup_return === 2) {
        return;
    }

    dist_files = new Enumerator(wsfs.GetFolder(getDistPath()).Files);

    for (dist_files.moveFirst(); !dist_files.atEnd(); dist_files.moveNext()) {
        wsfs.CopyFile(dist_files.item(), getDNFPath(), true);
    }

    wssh.Popup(
        'Subtitle files are all replaced.',
        0,
        'Done',
        0 + 64
    );
})();
